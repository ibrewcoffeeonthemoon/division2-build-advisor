from abc import ABC, abstractmethod

from torch import Tensor, tensor


class _Attribute(ABC):
    def __init__(
        self,
        value: float,
        *,
        name: str | None = None,
    ) -> None:
        self._name = name if name is not None else self.__class__.__name__
        self._value = value
        self._value_tensor: Tensor | None = None

    @property
    def name(self) -> str:
        return self._name

    @property
    def value(self) -> Tensor:
        if self._value_tensor is None:
            self._value_tensor = tensor(self._value, requires_grad=True)
        return self._value_tensor

    @property
    @abstractmethod
    def expected_value(self) -> Tensor: ...


class _StaticAttribute(_Attribute):
    @property
    def expected_value(self) -> Tensor:
        return self.value


class _DynamicAttribute(_Attribute):
    def __init__(
        self,
        value: float,
        *,
        uptime: float = 1.0,
        name: str | None = None,
    ) -> None:
        super().__init__(value, name=name)
        self._uptime = uptime
        self._uptime_tensor: Tensor | None = None
        self._expected_value_tensor: Tensor | None = None

    @property
    def uptime(self) -> Tensor:
        if self._uptime_tensor is None:
            self._uptime_tensor = tensor(self._uptime, requires_grad=True)
        return self._uptime_tensor

    @property
    def expected_value(self) -> Tensor:
        if self._expected_value_tensor is None:
            self._expected_value_tensor = self.value * self.uptime
        return self._expected_value_tensor


class WD:
    pass


class WDCore(_StaticAttribute, WD):
    pass


class WDType(_StaticAttribute, WD):
    pass


class WDTalent(_DynamicAttribute, WD):
    pass


class RedCore(WDCore):
    def __init__(self, value: float = 0.15) -> None:
        super().__init__(value, name='RedCore')


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


class HS(_StaticAttribute):
    def __init__(self, value: float,) -> None:
        super().__init__(value, name='HS')


class CHC(_StaticAttribute):
    def __init__(self, value: float) -> None:
        super().__init__(value, name='CHC')


class CHD(_StaticAttribute):
    def __init__(self, value: float) -> None:
        super().__init__(value, name='CHD')


class _DTA_DTH(_DynamicAttribute):
    pass


class DTA(_DTA_DTH):
    pass


class DTH(_DTA_DTH):
    pass


class DTTOOC(_DynamicAttribute):
    pass


class ROF(_StaticAttribute):
    pass
