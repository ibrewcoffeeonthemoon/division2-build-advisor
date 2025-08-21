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

        self._base_dmg = tensor(self._weapon.base_damage)
        self._dmg = self._base_dmg * self._dmg_x
        self._base_rof = tensor(self._weapon.rate_of_fire)
        self._dps = self._base_rof * self._rof * self._dmg

        # state
        self._compiled = False

    # helpers
    def stats(self) -> None:
        if not self._compiled:
            self._compile()

        t = 'Stats:\n'
        t += f'  CHC: {self._chc.item():.2%}'
        t += f'  CHD: {self._chd.item():.2%}'
        t += f'  HS: {self._hs.item():.2%}'
        t += f'  HSC: {self._hsc.item():.2%}'
        print(t)
        print('')

    def formula(self) -> None:
        if not self._compiled:
            self._compile()

        t = 'Multipliers:\n'
        t += f'DMGx({self._dmg_x.item():.4f}) = '
        t += f'WD[{self._wd.item():.4f}] x '
        t += f'TWD[{self._twd.item():.4f}] x '
        t += f'AMP1[{self._amp1.item():.4f}] x '
        t += f'AMP2[{self._amp2.item():.4f}] x '
        t += f'AMP3[{self._amp3.item():.4f}] x '
        t += f'Crit_HS[{self._crit_hs.item():.4f}] x '
        t += f'DTA_DTH[{self._dta_dth.item():.4f}] x '
        t += f'DTTOOC[{self._dttooc.item():.4f}]'
        print(t)
        print('')

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
                f'{a.name}({a.expected_value.item():.4f})'
                for a in select(T)])

        def presenting(T: type) -> str:
            content = joining(T)
            if len(content) == 0:
                return ''
            return f' x (1 + {content})\n'

        t = 'Breakdown:\n'
        t += f'DMG({self._dmg.item():,.0f}) = BaseDamage({self._base_dmg.item():,.0f})\n'
        t += presenting(WD)
        t += presenting(TWD)
        t += presenting(AMP1)
        t += presenting(AMP2)
        t += presenting(AMP3)
        t += (
            f' x (1 + CHC({self._chc.item():.4f}) x CHD({self._chd.item():.4f}) '
            f'+ HS({self._hs.item():.4f}) x HSC({self._hsc.item():.4f}))\n'
        )
        t += presenting(_DTA_DTH)
        t += presenting(DTTOOC)

        print(t)
        print('')

    def gradients(self) -> None:
        if not self._compiled:
            self._compile()

        print(f'{self.__class__.__name__} Gradients:')
        for items in ((self._weapon, ), self._gears, self._extras):
            for item in items:
                print(f'{" "*2}{item.name}:')
                for attr in item.attributes:
                    if attr.value.grad is not None:
                        print(f'{" "*4}{attr.name:15s}: {attr.value.grad:{self._grad_format}}')

        print('')


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


class DPS(_ComputeGraphManager):
    _grad_format = ',.0f'

    @override
    def _compile(self) -> None:
        self._dps.backward(retain_graph=True)

    @property
    def dps(self) -> Tensor:
        return self._dps
