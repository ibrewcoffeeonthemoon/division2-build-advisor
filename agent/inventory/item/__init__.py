from agent.inventory.attribute import _SimpleAttribute


class Item:
    def __init__(
        self,
        name: str,
        *attributes: _SimpleAttribute,
    ) -> None:
        self.name = name
        self.attributes = attributes
