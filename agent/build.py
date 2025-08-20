import torch

from agent.inventory.attribute import *
from agent.inventory.attribute import _DTA_DTH, _WeightedAttribute
from agent.inventory.item import Item


class Build:
    def __init__(
        self,
        weapon: Item,
        gear1: Item,
        gear2: Item,
        gear3: Item,
        gear4: Item,
        gear5: Item,
        gear6: Item,
        keeners_watch: Item,
        *,
        chc_basic: float = 0.10,
        chd_basic: float = 0.25,
        hs_basic: float = 0.50,
    ) -> None:
        self.weapon = weapon
        self.gears = (
            gear1, gear2, gear3,
            gear4, gear5, gear6,
            keeners_watch
        )

        # stats
        self._chc = torch.tensor(chc_basic)
        self._chd = torch.tensor(chd_basic)
        self._hs = torch.tensor(hs_basic)

        # backward
        self.dmg_x.backward()

    def _accumulate(self, T: type) -> torch.Tensor:
        val = torch.tensor(0.0)
        for a in self.weapon.attributes:
            if isinstance(a, _WeightedAttribute) and isinstance(a, T):
                val += a.expected_value
        for gear in self.gears:
            for a in gear.attributes:
                if isinstance(a, _WeightedAttribute) and isinstance(a, T):
                    val += a.expected_value
        return val

    def _multiplier(self, T: type) -> torch.Tensor:
        return torch.tensor(1.0) + self._accumulate(T)

    @property
    def _wd(self) -> torch.Tensor:
        return self._multiplier(WD)

    @property
    def _twd(self) -> torch.Tensor:
        return self._multiplier(TWD)

    @property
    def _amp1(self) -> torch.Tensor:
        return self._multiplier(AMP1)

    @property
    def _amp2(self) -> torch.Tensor:
        return self._multiplier(AMP2)

    @property
    def _amp3(self) -> torch.Tensor:
        return self._multiplier(AMP3)

    @property
    def _crit_hs(self) -> torch.Tensor:
        for attr in self.weapon.attributes:
            if isinstance(attr, CHC):
                self._chc += attr.value
            elif isinstance(attr, CHD):
                self._chd += attr.value
        for gear in self.gears:
            for attr in gear.attributes:
                if isinstance(attr, CHC):
                    self._chc += attr.value
                elif isinstance(attr, CHD):
                    self._chd += attr.value
        self._hs = self._accumulate(HS)

        return torch.tensor(1.0) + self._chc*self._chd + self._hs

    @property
    def _dta_dth(self) -> torch.Tensor:
        return self._multiplier(_DTA_DTH)

    @property
    def _dttooc(self) -> torch.Tensor:
        return self._multiplier(DTTOOC)

    @property
    def dmg_x(self) -> torch.Tensor:
        val = (
            self._wd *
            self._twd *
            self._amp1 *
            self._amp2 *
            self._amp3 *
            self._crit_hs *
            self._dta_dth *
            self._dttooc
        )
        return val

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

    def stats(self, newline=True) -> None:
        t = 'Stats:\n'
        t += f'  CHC: {self.chc:.2%}'
        t += f'  CHD: {self.chd:.2%}'
        t += f'  HS: {self.hs:.2%}'
        print(t)
        if newline:
            print('')

    def formula(self, newline=True) -> None:
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

    def gradients(self, newline=True) -> None:
        print(f'DMG Gradients:')
        print(f'{" "*2}{self.weapon.name}:')
        for attr in self.weapon.attributes:
            print(f'{" "*4}{attr.name:15s}: {attr.value.grad:.4f}')

        for gear in self.gears:
            print(f'{" "*2}{gear.name}:')
            for attr in gear.attributes:
                print(f'{" "*4}{attr.name:15s}: {attr.value.grad:.4f}')
        if newline:
            print('')
