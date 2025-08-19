import torch

from gear import *


class Build:
    def __init__(
        self,
        *gears: Gear,
    ) -> None:
        self.gears = gears

        # backward
        self.dmg.backward()

    @property
    def wd(self) -> torch.Tensor:
        val = torch.tensor(1.0)
        for gear in self.gears:
            for attr in gear.attributes:
                if isinstance(attr, WD):
                    val += attr.expected_value
        return val

    @property
    def twd(self) -> torch.Tensor:
        val = torch.tensor(1.0)
        for gear in self.gears:
            for attr in gear.attributes:
                if isinstance(attr, TWD):
                    val += attr.expected_value
        return val

    @property
    def dmg(self) -> torch.Tensor:
        val = self.wd * self.twd
        return val

    # helpers
    def formula(self, newline=True) -> None:
        print((
            'DMGx = '
            f'WD[{self.wd.item():.4f}] x '
            f'TWD[{self.twd.item():.4f}]'
        ))
        if newline:
            print('')

    def gradients(self, newline=True) -> None:
        print(f'DMG Gradients:')
        for gear in self.gears:
            print(f'{" "*2}{gear.name}:')
            for attr in gear.attributes:
                print(f'{" "*4}{attr.name:12s}: {attr.value.grad:.4f}')
        if newline:
            print('')
