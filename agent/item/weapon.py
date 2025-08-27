from typing import NotRequired

from agent.item import Item, ItemKwargs
from agent.item.attribute import *
from agent.item.attribute import _Attribute


class WeaponKwargs(ItemKwargs):
    base_damage: NotRequired[int]
    rpm: NotRequired[int]


class Weapon(Item):
    def __init__(
        self,
        *attributes: _Attribute,
        name: str | None = None,
        base_damage: int = 48_700,
        rpm: int = 850,
    ) -> None:
        super().__init__(*attributes, name=name)
        self.base_damage = base_damage
        self.rpm = rpm

    @property
    def type(self) -> str:
        return 'Weapon'


class Lexington(Weapon):
    _name = 'Lexington'

    def __init__(
        self,
        *extras: _Attribute,
        expertise: int = 0,
        ar_damage: float = 0.15,
        dth: float = 0.21,
        dth_uptime: float = 0.3,
        attributes: _Attribute | None = None,
    ) -> None:
        self.core_attr1 = WDType(ar_damage, name='AR')
        self.core_attr2 = DTH(dth, uptime=dth_uptime)
        self.attr = DTTOOC(0.10, uptime=0.9) if attributes is None else attributes
        super().__init__(
            WDCore(expertise*0.01, name='Expertise'),
            self.core_attr1,
            self.core_attr2,
            self.attr,
            *extras,
            base_damage=48_700,
            rpm=850,
        )


class StElmoEngine(Weapon):
    _name = "St. Elmo's Engine"

    def __init__(
        self,
        expertise: int = 0,
        ar_damage: float = 0.15,
        dth: float = 0.21,
        dth_uptime: float = 0.3,
        attributes: _Attribute | None = None,
        mod_chc: float = 0.15,
        mod_chd: float = 0.15,
    ) -> None:
        self.core_attr1 = WDType(ar_damage, name='AR')
        self.core_attr2 = DTH(dth, uptime=dth_uptime)
        self.attr = DTTOOC(0.10, uptime=0.9) if attributes is None else attributes
        self.mod1 = CHC(mod_chc)
        self.mod2 = CHD(mod_chd)
        super().__init__(
            WDCore(expertise*0.01, name='Expertise'),
            self.core_attr1,
            self.core_attr2,
            self.attr,
            self.mod1,
            self.mod2,
            base_damage=46_918,
            rpm=850,
        )
