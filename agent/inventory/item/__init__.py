from agent.inventory.attribute import _StaticAttribute


class Item:
    def __init__(
        self,
        name: str,
        *attributes: _StaticAttribute,
    ) -> None:
        self.name = name
        self.attributes = attributes
