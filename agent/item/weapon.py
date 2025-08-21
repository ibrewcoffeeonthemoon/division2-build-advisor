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


# class Lexington(Weapon):
#     def __init__(self) -> None:
#         super().__init__(
#             'Lexington',
#
#             base_damage=48_700,
#             rpm=850
#         )
