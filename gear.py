import torch


class Attribute:
    def __init__(
        self,
        name: str,
        value: float,
        *,
        uptime: float = 1.0,
    ) -> None:
        self.name = name
        self.value = torch.tensor(value, requires_grad=True)
        self.uptime = torch.tensor(uptime, requires_grad=True)
        self.expected_value = self.value * self.uptime


class WD(Attribute):
    pass


class TWD(Attribute):
    pass


class Gear:
    def __init__(
        self,
        name: str,
        *attributes: Attribute,
    ) -> None:
        self.name = name
        self.attributes = attributes


class Mask(Gear):
    pass


class Backpack(Gear):
    pass


class Chest(Gear):
    pass


class Gloves(Gear):
    pass


class Holster(Gear):
    pass


class Kneepads(Gear):
    pass
