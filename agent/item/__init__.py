from abc import ABC, abstractmethod

from agent.item.attribute import _Attribute


class Item(ABC):
    _name: str | None = None

    def __init__(
        self,
        *attributes: _Attribute,
        name: str | None = None,
    ) -> None:
        self.attributes = attributes
        self.name = name or self._name or self.__class__.__name__

    @property
    @abstractmethod
    def type(self) -> str: ...
