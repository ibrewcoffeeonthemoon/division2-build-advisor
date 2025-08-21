from agent.item.attribute import _Attribute


class Item:
    def __init__(
        self,
        name: str,
        *attributes: _Attribute,
    ) -> None:
        self.name = name
        self.attributes = attributes
