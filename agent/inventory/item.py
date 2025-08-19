from agent.inventory.attribute import Attribute


class Item:
    def __init__(
        self,
        name: str,
        *attributes: Attribute,
    ) -> None:
        self.name = name
        self.attributes = attributes
