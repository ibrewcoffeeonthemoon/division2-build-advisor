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
