from agent.item import Item
from agent.item.attribute import _Attribute


class Weapon(Item):
    def __init__(
        self,
        name: str,
        *attributes: _Attribute,
        base_damage: int,
        rate_of_fire: int,
    ) -> None:
        super().__init__(name, *attributes)
        self.base_damage = base_damage
        self.rate_of_fire = rate_of_fire
