from agent.item.attribute import _Attribute


class Item:
    def __init__(
        self,
        *attributes: _Attribute,
        name: str | None = None,
    ) -> None:
        self.attributes = attributes
        self.name = name if name is not None else self.__class__.__name__
