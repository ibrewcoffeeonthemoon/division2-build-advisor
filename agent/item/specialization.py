from agent.item import Item
from agent.item.attribute import _Attribute


class Specialization(Item):
    pass


class Gunner(Specialization):
    def __init__(
        self,
        *attributes: _Attribute,
    ) -> None:
        super().__init__(*attributes, name='Gunner')

    @property
    def type(self) -> str:
        return 'Specialization'
