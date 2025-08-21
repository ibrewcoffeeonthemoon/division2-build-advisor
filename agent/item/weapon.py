from agent.item import Item
from agent.item.attribute import *
from agent.item.attribute import _Attribute


class Weapon(Item):
    def __init__(
        self,
        *attributes: _Attribute,
        name: str | None = None,
        base_damage: int,
        rpm: int,
    ) -> None:
        super().__init__(*attributes, name=name)
        self.base_damage = base_damage
        self.rpm = rpm


class Lexington(Weapon):
    def __init__(
        self,
        *extras: _Attribute,
        expertise: int = 0,
        ar_damage: float = 0.15,
        dth: float = 0.21,
        dth_uptime: float = 0.3,
        attributes: _Attribute | None = None,
    ) -> None:
        self.core_attr1 = WD(ar_damage, name='ARType')
        self.core_attr2 = DTH(dth, uptime=dth_uptime)
        self.attr = DTTOOC(0.10, uptime=0.9) if attributes is None else attributes
        super().__init__(
            WD(expertise*0.01, name=f'Expertise.{expertise}'),
            self.core_attr1,
            self.core_attr2,
            self.attr,
            *extras,
            base_damage=48_700,
            rpm=850,
            name='Lexington',
        )
