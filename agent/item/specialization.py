from agent.item import Item, ItemKwargs
from agent.item.attribute import _Attribute

SpecializationKwargs = ItemKwargs


class Specialization(Item):
    @property
    def type(self) -> str:
        return 'Specialization'


class Gunner(Specialization):
    def __init__(
        self,
        *attributes: _Attribute,
    ) -> None:
        super().__init__(*attributes, name='Gunner')
