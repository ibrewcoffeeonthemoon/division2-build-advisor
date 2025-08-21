from typing import override

from torch import Tensor, tensor

from agent.item.attribute import *
from agent.item.attribute import _DTA_DTH
from agent.item.gear import Gears
from agent.item.specialization import Specialization
from agent.item.watch import KeenersWatch
from agent.item.weapon import Weapon


class _ComputeGraphManager(ABC):
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
            # weapon
            for a in weapon.attributes:
                if isinstance(a, T):
                    val += a.expected_value

            # inventory items
            for items in (gears, extras):
                for item in items:
                    for a in item.attributes:
                        if isinstance(a, T):
                            val += a.expected_value

            #
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

        # state
        self._compiled = False

    # helpers
    def gradients(self) -> None:
        if not self._compiled:
            self._compile()

        print(f'DMG Gradients:')
        print(f'{" "*2}{self._weapon.name}:')
        for attr in self._weapon.attributes:
            print(f'{" "*4}{attr.name:15s}: {attr.value.grad:.4f}')

        for items in (self._gears, self._extras):
            for item in items:
                print(f'{" "*2}{item.name}:')
                for attr in item.attributes:
                    print(f'{" "*4}{attr.name:15s}: {attr.value.grad:.4f}')

        print('')


class DMGx(_ComputeGraphManager):
    @override
    def _compile(self) -> None:
        self._dmg_x.backward(retain_graph=True)

    @property
    def dmg_x(self) -> Tensor:
        return self._dmg_x
