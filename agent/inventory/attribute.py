import torch


class _Attribute:
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


class WD(_Attribute):
    pass


class TWD(_Attribute):
    pass


class AMP1(_Attribute):
    pass


class AMP2(_Attribute):
    pass


class AMP3(_Attribute):
    pass


class DTTOOC(_Attribute):
    pass
