from abc import ABC


class _Attribute(ABC):
    _name: str | None = None

    def __init__(
        self,
        value: float,
        *,
        name: str | None = None,
    ) -> None:
        self.name = name or self._name or self.__class__.__name__
        self.value = value


class _StaticAttribute(_Attribute):
    pass


class _DynamicAttribute(_Attribute):
    def __init__(
        self,
        value: float,
        *,
        uptime: float = 1.0,
        name: str | None = None,
    ) -> None:
        super().__init__(value, name=name)
        self.uptime = uptime


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
    pass


class CHC(_DynamicAttribute):
    pass


class CHD(_DynamicAttribute):
    pass


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


class Mod:
    class CHC(CHC):
        _name = 'Mod.CHC'

    class CHD(CHD):
        _name = 'Mod.CHD'

    class HS(HS):
        _name = 'Mod.HS'

    class ROF(ROF):
        _name = 'Mod.ROF'
