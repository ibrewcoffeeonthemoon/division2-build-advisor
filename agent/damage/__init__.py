
from typing import override

from torch import Tensor, tensor

import agent.damage.output as Output
from agent.item.attribute import *
from agent.item.attribute import _DTA_DTH
from agent.item.gear import Gears
from agent.item.specialization import Specialization
from agent.item.watch import KeenersWatch
from agent.item.weapon import Weapon


class _ComputeGraphManager(ABC):
    _grad_format = '.4f'

    @abstractmethod
    def _compile(self) -> None:
        ...

    def __init__(
        self,
        weapon: Weapon,
        gears: Gears,
        extras: tuple[Specialization, KeenersWatch],
        *,
        chc_basic: float,
        chd_basic: float,
        hs_basic: float,
        hsc_basic: float,
    ) -> None:
        self._weapon = weapon
        self._gears = gears
        self._extras = extras

        # compute graph

        def accumulate(T: type, init_val: float = 0.0) -> Tensor:
            val = tensor(init_val)

            for items in ((weapon, ), gears, extras):
                for item in items:
                    for a in item.attributes:
                        if isinstance(a, T):
                            val += a.expected_value

            return val

        self._wd = tensor(1.0) + accumulate(WD)
        self._twd = tensor(1.0) + accumulate(TWD)
        self._amp1 = tensor(1.0) + accumulate(AMP1)
        self._amp2 = tensor(1.0) + accumulate(AMP2)
        self._amp3 = tensor(1.0) + accumulate(AMP3)
        self._chc = accumulate(CHC, chc_basic)
        self._chd = accumulate(CHD, chd_basic)
        self._hs = accumulate(HS, hs_basic)
        self._hsc = tensor(hsc_basic)
        self._crit_hs = tensor(1.0) + self._chc * self._chd + self._hs * self._hsc
        self._dta_dth = tensor(1.0) + accumulate(_DTA_DTH)
        self._dttooc = tensor(1.0) + accumulate(DTTOOC)
        self._dmg_x = (
            self._wd *
            self._twd *
            self._amp1 *
            self._amp2 *
            self._amp3 *
            self._crit_hs *
            self._dta_dth *
            self._dttooc
        )
        self._rof = tensor(1.0) + accumulate(ROF)
        self._dps_x = self._dmg_x * self._rof

        self._base_dmg = tensor(self._weapon.base_damage)
        self._dmg = self._base_dmg * self._dmg_x
        self._base_rof = tensor(self._weapon.rpm / 60)
        self._dps = self._base_rof * self._rof * self._dmg

        # state
        self._compiled = False

    # helpers
    @property
    def stats(self) -> Output.Stats:
        if not self._compiled:
            self._compile()

        return Output.Stats(
            weapon_name=self._weapon.name,
            data=Output.Stats.Data(
                CHC=self._chc.item(),
                CHD=self._chd.item(),
                HS=self._hs.item(),
                HSC=self._hsc.item(),
            )
        )

    @property
    def formula(self) -> Output.Formula:
        if not self._compiled:
            self._compile()

        return Output.Formula(
            weapon_name=self._weapon.name,
            data=Output.Formula.Data(
                DMGx=self._dmg_x.item(),
                WD=self._wd.item(),
                TWD=self._twd.item(),
                AMP1=self._amp1.item(),
                AMP2=self._amp2.item(),
                AMP3=self._amp3.item(),
                Crit_HS=self._crit_hs.item(),
                DTA_DTH=self._dta_dth.item(),
                DTTOOC=self._dttooc.item(),
                DPSx=self._dps_x.item(),
                ROF=self._rof.item(),
            )
        )

    @property
    def breakdown(self) -> Output.Breakdown:
        if not self._compiled:
            self._compile()

        def select(T: type) -> list[Output.Breakdown.Data.Attribute]:
            ls = []

            for items in ((self._weapon, ), self._gears, self._extras):
                for item in items:
                    for a in item.attributes:
                        if isinstance(a, T):
                            ls.append(Output.Breakdown.Data.Attribute(
                                name=a.name,
                                expected_value=a.expected_value.item(),
                            ))

            return ls

        return Output.Breakdown(
            weapon_name=self._weapon.name,
            data=Output.Breakdown.Data(
                DMG=self._dmg.item(),
                BaseDamage=self._base_dmg.item(),
                WD=select(WD),
                TWD=select(TWD),
                AMP1=select(AMP1),
                AMP2=select(AMP2),
                AMP3=select(AMP3),
                CHC=self._chc.item(),
                CHD=self._chd.item(),
                HS=self._hs.item(),
                HSC=self._hsc.item(),
                _DTA_DTH=select(_DTA_DTH),
                DTTOOC=select(DTTOOC),
            )
        )

    @property
    def gradients(self) -> Output.Gradients:
        if not self._compiled:
            self._compile()

        return Output.Gradients(
            name=self.__class__.__name__,
            grad_format=self._grad_format,
            items_ls=[
                Output.Gradients.Items(
                    items=[
                        Output.Gradients.Items.Item(
                            name=item.name,
                            type=item.type,
                            attrs=[
                                Output.Gradients.Items.Item.Attribute(
                                    name=attr.name,
                                    value=attr.value.item(),
                                    grad=attr.value.grad.item(),
                                )
                                for attr in item.attributes
                                if attr.value.grad is not None
                            ])
                        for item in items
                    ])
                for items in ((self._weapon, ), self._gears, self._extras)
            ],
        )


class DMGx(_ComputeGraphManager):
    @override
    def _compile(self) -> None:
        self._dmg_x.backward(retain_graph=True)

    @property
    def dmg_x(self) -> Tensor:
        return self._dmg_x


class DMG(_ComputeGraphManager):
    _grad_format = ',.0f'

    @override
    def _compile(self) -> None:
        self._dmg.backward(retain_graph=True)

    @property
    def dmg(self) -> Tensor:
        return self._dmg


class DPSx(_ComputeGraphManager):
    @override
    def _compile(self) -> None:
        self._dps_x.backward(retain_graph=True)

    @property
    def dps(self) -> Tensor:
        return self._dps_x


class DPS(_ComputeGraphManager):
    _grad_format = ',.0f'

    @override
    def _compile(self) -> None:
        self._dps.backward(retain_graph=True)

    @property
    def dps(self) -> Tensor:
        return self._dps
