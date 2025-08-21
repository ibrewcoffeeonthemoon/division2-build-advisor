from copy import deepcopy
from typing import Self

from torch import Tensor, tensor

from agent.damage import DMGx
from agent.item.attribute import *
from agent.item.attribute import _DTA_DTH, _Attribute
from agent.item.gear import Backpack, Chest, Gloves, Holster, Kneepads, Mask
from agent.item.specialization import Specialization
from agent.item.watch import KeenersWatch
from agent.item.weapon import Weapon


class Build:
    def __init__(
        self,
        *,
        chc_basic: float = 0.10,
        chd_basic: float = 0.25,
        hs_basic: float = 0.50,
        hsc_basic: float = 0.2,
    ) -> None:
        self._chc_basic = chc_basic
        self._chd_basic = chd_basic
        self._hs_basic = hs_basic
        self._hsc_basic = hsc_basic
        self._compiled = False

    def _select(self, T: type) -> list[_Attribute]:
        ls = []

        # weapon
        for a in self._weapon.attributes:
            if isinstance(a, T):
                ls.append(a)

        # inventory items
        for items in (self._gears, self._extras):
            for item in items:
                for a in item.attributes:
                    if isinstance(a, T):
                        ls.append(a)

        #
        return ls

    def _accumulate(self, T: type, init_val: float = 0.0) -> Tensor:
        val = tensor(init_val)
        # weapon
        for a in self._weapon.attributes:
            if isinstance(a, T):
                val += a.expected_value

        # inventory items
        for items in (self._gears, self._extras):
            for item in items:
                for a in item.attributes:
                    if isinstance(a, T):
                        val += a.expected_value

        #
        return val

    def _compile(self) -> None:
        assert not self._compiled

        # compute graph
        self._wd = tensor(1.0) + self._accumulate(WD)
        self._twd = tensor(1.0) + self._accumulate(TWD)
        self._amp1 = tensor(1.0) + self._accumulate(AMP1)
        self._amp2 = tensor(1.0) + self._accumulate(AMP2)
        self._amp3 = tensor(1.0) + self._accumulate(AMP3)
        self._chc = self._accumulate(CHC, self._chc_basic)
        self._chd = self._accumulate(CHD, self._chd_basic)
        self._hs = self._accumulate(HS, self._hs_basic)
        self._hsc = tensor(self._hsc_basic)
        self._crit_hs = tensor(1.0) + self._chc * self._chd + self._hs * self._hsc
        self._dta_dth = tensor(1.0) + self._accumulate(_DTA_DTH)
        self._dttooc = tensor(1.0) + self._accumulate(DTTOOC)
        self.dmg_x = (
            self._wd *
            self._twd *
            self._amp1 *
            self._amp2 *
            self._amp3 *
            self._crit_hs *
            self._dta_dth *
            self._dttooc
        )

        # backward
        self.dmg_x.backward()

        # set flag
        self._compiled = True

    def dmg(self, id: int = 0) -> DMGx:
        # TODO
        return DMGx(
            deepcopy(self._weapons[id]),
            deepcopy(self._gears),
            deepcopy(self._extras),
            chc_basic=self._chc_basic,
            chd_basic=self._chd_basic,
            hs_basic=self._hs_basic,
            hsc_basic=self._hsc_basic,
        )

    # chain methods

    def weapons(
        self,
        weapon1: Weapon,
        weapon2: Weapon,
    ) -> Self:
        self._weapons = (weapon1, weapon2, )
        return self

    def gears(
        self,
        mask: Mask,
        backpack: Backpack,
        chest: Chest,
        gloves: Gloves,
        holster: Holster,
        kneepads: Kneepads,
    ) -> Self:
        self._gears = (
            mask, backpack,
            chest, gloves,
            holster, kneepads,
        )
        return self

    def extras(
        self,
        specialization: Specialization,
        keeners_watch: KeenersWatch,
    ) -> Self:
        self._extras = (
            specialization,
            keeners_watch,
        )
        return self

    # helpers

    @property
    def chc(self) -> float:
        return self._chc.item()

    @property
    def chd(self) -> float:
        return self._chd.item()

    @property
    def hs(self) -> float:
        return self._hs.item()

    @property
    def hsc(self) -> float:
        return self._hsc.item()

    def stats(self, newline=True) -> None:
        if not self._compiled:
            self._compile()

        t = 'Stats:\n'
        t += f'  CHC: {self.chc:.2%}'
        t += f'  CHD: {self.chd:.2%}'
        t += f'  HS: {self.hs:.2%}'
        t += f'  HSC: {self.hsc:.2%}'
        print(t)
        if newline:
            print('')

    def formula(self, newline=True) -> None:
        if not self._compiled:
            self._compile()

        t = 'Multipliers:\n'
        t += '  DMGx = '
        t += f'WD[{self._wd.item():.4f}] x '
        t += f'TWD[{self._twd.item():.4f}] x '
        t += f'AMP1[{self._amp1.item():.4f}] x '
        t += f'AMP2[{self._amp2.item():.4f}] x '
        t += f'AMP3[{self._amp3.item():.4f}] x '
        t += f'Crit_HS[{self._crit_hs.item():.4f}] x '
        t += f'DTA_DTH[{self._dta_dth.item():.4f}] x '
        t += f'DTTOOC[{self._dttooc.item():.4f}]'
        print(t)
        if newline:
            print('')

    def breakdown(self, newline=True) -> None:
        if not self._compiled:
            self._compile()

        def joining(T: type) -> str:
            return ' + '.join([
                f'{a.name}({a.expected_value.item():.4f})'
                for a in self._select(T)])

        def presenting(T: type) -> str:
            content = joining(T)
            if len(content) == 0:
                return ''
            return f' x (1 + {content})\n'

        t = 'Breakdown:\n'
        t += 'DMG = BaseDamage\n'
        t += presenting(WD)
        t += presenting(TWD)
        t += presenting(AMP1)
        t += presenting(AMP2)
        t += presenting(AMP3)
        t += f' x (1 + CHC({self.chc:.4f}) x CHD({self.chd:.4f}) + HS({self.hs:.4f}) x HSC({self.hsc:.4f}))\n'
        t += presenting(_DTA_DTH)
        t += presenting(DTTOOC)

        print(t)
        if newline:
            print('')
