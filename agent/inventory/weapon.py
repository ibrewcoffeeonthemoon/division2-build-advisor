from agent.inventory.attribute import Attribute


class Weapon:
    def __init__(
        self,
        name: str,
        *attributes: Attribute,
    ) -> None:
        self.name = name
        self.attributes = attributes
