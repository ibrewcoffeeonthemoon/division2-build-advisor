from abc import ABC, abstractmethod

import torch


class _Attribute(ABC):
    @property
    @abstractmethod
    def name(self) -> str: ...
    @property
    @abstractmethod
    def value(self) -> torch.Tensor: ...
    @property
    @abstractmethod
    def expected_value(self) -> torch.Tensor: ...


class _SimpleAttribute:
    def __init__(
        self,
        name: str,
        value: float,
    ) -> None:
        self.name = name
        self.value = torch.tensor(value, requires_grad=True)


class _WeightedAttribute(_SimpleAttribute):
    def __init__(
        self,
        name: str,
        value: float,
        *,
        uptime: float = 1.0,
    ) -> None:
        super().__init__(name, value)
        self.uptime = torch.tensor(uptime, requires_grad=True)
        self.expected_value = self.value * self.uptime


class WD(_WeightedAttribute):
    pass


class TWD(_WeightedAttribute):
    pass


class _AMP(_WeightedAttribute):
    pass


class AMP1(_AMP):
    pass


class AMP2(_AMP):
    pass


class AMP3(_AMP):
    pass


class _DTA_DTH(_WeightedAttribute):
    pass


class DTA(_DTA_DTH):
    pass


class DTH(_DTA_DTH):
    pass


class DTTOOC(_WeightedAttribute):
    pass


class HS(_SimpleAttribute):
    def __init__(self, value: float,) -> None:
        super().__init__('HS', value)


class CHC(_SimpleAttribute):
    def __init__(self, value: float) -> None:
        super().__init__('CHC', value)


class CHD(_SimpleAttribute):
    def __init__(self, value: float) -> None:
        super().__init__('CHD', value)
