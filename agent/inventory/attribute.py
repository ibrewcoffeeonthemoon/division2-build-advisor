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


class _AMP(_Attribute):
    pass


class AMP1(_AMP):
    pass


class AMP2(_AMP):
    pass


class AMP3(_AMP):
    pass


class _DTA_DTH(_Attribute):
    pass


class DTA(_DTA_DTH):
    pass


class DTH(_DTA_DTH):
    pass


class DTTOOC(_Attribute):
    pass
