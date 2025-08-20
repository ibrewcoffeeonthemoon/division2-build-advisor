import torch

from agent.inventory.attribute import *
from agent.inventory.attribute import _DTA_DTH
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
    ) -> None:
        self.weapon = weapon
        self.gears = (gear1, gear2, gear3, gear4, gear5, gear6)

        # backward
        self.dmg.backward()

    def _accumulate(self, T: type) -> torch.Tensor:
        val = torch.tensor(1.0)
        for attr in self.weapon.attributes:
            if isinstance(attr, T):
                val += attr.expected_value
        for gear in self.gears:
            for attr in gear.attributes:
                if isinstance(attr, T):
                    val += attr.expected_value
        return val

    @property
    def wd(self) -> torch.Tensor:
        return self._accumulate(WD)

    @property
    def twd(self) -> torch.Tensor:
        return self._accumulate(TWD)

    @property
    def amp1(self) -> torch.Tensor:
        return self._accumulate(AMP1)

    @property
    def amp2(self) -> torch.Tensor:
        return self._accumulate(AMP2)

    @property
    def amp3(self) -> torch.Tensor:
        return self._accumulate(AMP3)

    @property
    def dta_dth(self) -> torch.Tensor:
        return self._accumulate(_DTA_DTH)

    @property
    def dttooc(self) -> torch.Tensor:
        return self._accumulate(DTTOOC)

    @property
    def dmg(self) -> torch.Tensor:
        val = (
            self.wd *
            self.twd *
            self.amp1 *
            self.amp2 *
            self.amp3 *
            self.dta_dth *
            self.dttooc
        )
        return val

    # helpers
    def formula(self, newline=True) -> None:
        t = 'DMGx = '
        t += f'WD[{self.wd.item():.4f}] x '
        t += f'TWD[{self.twd.item():.4f}] x '
        t += f'AMP1[{self.amp1.item():.4f}] x '
        t += f'AMP2[{self.amp2.item():.4f}] x '
        t += f'AMP3[{self.amp3.item():.4f}] x '
        t += f'DTA_DTH[{self.dta_dth.item():.4f}] x '
        t += f'DTTOOC[{self.dttooc.item():.4f}]'
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
