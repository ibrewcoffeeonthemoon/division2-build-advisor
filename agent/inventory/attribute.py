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


class _StaticAttribute:
    def __init__(
        self,
        name: str,
        value: float,
    ) -> None:
        self.name = name
        self.value = torch.tensor(value, requires_grad=True)


class _DynamicAttribute(_StaticAttribute):
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


class WD(_DynamicAttribute):
    pass


class TWD(_DynamicAttribute):
    pass


class _AMP(_DynamicAttribute):
    pass


class AMP1(_AMP):
    pass


class AMP2(_AMP):
    pass


class AMP3(_AMP):
    pass


class _DTA_DTH(_DynamicAttribute):
    pass


class DTA(_DTA_DTH):
    pass


class DTH(_DTA_DTH):
    pass


class DTTOOC(_DynamicAttribute):
    pass


class HS(_StaticAttribute):
    def __init__(self, value: float,) -> None:
        super().__init__('HS', value)


class CHC(_StaticAttribute):
    def __init__(self, value: float) -> None:
        super().__init__('CHC', value)


class CHD(_StaticAttribute):
    def __init__(self, value: float) -> None:
        super().__init__('CHD', value)
