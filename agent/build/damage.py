from typing import override

from torch import Tensor, tensor

from agent.item.attribute import *
from agent.item.attribute import _DTA_DTH, _Attribute
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
    def stats(self) -> str:
        if not self._compiled:
            self._compile()

        t = 'Stats:\n'
        t += f'  CHC: {self._chc.item():.0%}'
        t += f'  CHD: {self._chd.item():.0%}'
        t += f'  HS: {self._hs.item():.0%}'
        t += f'  HSC: {self._hsc.item():.0%}'

        return t.strip()

    def formula(self) -> None:
        if not self._compiled:
            self._compile()

        t = 'Multipliers:\n'
        t += f'   DMGx    {self._dmg_x.item():.3f}\n'
        t += f' = WD      {self._wd.item():.3f}\n'
        t += f' x TWD     {self._twd.item():.3f}\n'
        t += f' x AMP1    {self._amp1.item():.3f}\n'
        t += f' x AMP2    {self._amp2.item():.3f}\n'
        t += f' x AMP3    {self._amp3.item():.3f}\n'
        t += f' x Crit_HS {self._crit_hs.item():.3f}\n'
        t += f' x DTA_DTH {self._dta_dth.item():.3f}\n'
        t += f' x DTTOOC  {self._dttooc.item():.3f}\n'
        print(t)

    def breakdown(self) -> None:
        if not self._compiled:
            self._compile()

        def select(T: type) -> list[_Attribute]:
            ls = []

            # inventory items
            for items in ((self._weapon, ), self._gears, self._extras):
                for item in items:
                    for a in item.attributes:
                        if isinstance(a, T):
                            ls.append(a)

            #
            return ls

        def joining(T: type) -> str:
            return ' + '.join([
                f'{a.name} {a.expected_value.item():.1%}'
                for a in select(T)])

        def presenting(T: type) -> str:
            content = joining(T)
            if len(content) == 0:
                return ''
            return f' x (1 + {content})\n'

        t = 'Breakdown:\n'
        t += f'DMG {self._dmg.item():,.0f} = BaseDamage {self._base_dmg.item():,.0f}\n'
        t += presenting(WD)
        t += presenting(TWD)
        t += presenting(AMP1)
        t += presenting(AMP2)
        t += presenting(AMP3)
        t += (
            f' x (1 + CHC {self._chc.item():.1%} x CHD {self._chd.item():.1%} '
            f'+ HS {self._hs.item():.1%} x HSC {self._hsc.item():.1%})\n'
        )
        t += presenting(_DTA_DTH)
        t += presenting(DTTOOC)

        print(t)
        print('')

    @property
    def gradients(self) -> str:
        if not self._compiled:
            self._compile()

        t = f'{self.__class__.__name__} Gradients:\n'
        for items in ((self._weapon, ), self._gears, self._extras):
            for item in items:
                t += f'{" "*2}{item.name}:\n'
                for attr in item.attributes:
                    if attr.value.grad is not None:
                        name = f'{attr.name} {attr.value.item():.1%}'
                        t += f'{" "*4}{name:20}: {attr.value.grad:{self._grad_format}}\n'

        return t.strip()


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
