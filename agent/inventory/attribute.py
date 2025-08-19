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
