from agent.item import Item


class Gear(Item):
    pass


class Mask(Gear):
    @property
    def type(self) -> str:
        return 'Mask'


class Backpack(Gear):
    @property
    def type(self) -> str:
        return 'Backpack'


class Chest(Gear):
    @property
    def type(self) -> str:
        return 'Chest'


class Gloves(Gear):
    @property
    def type(self) -> str:
        return 'Gloves'


class Holster(Gear):
    @property
    def type(self) -> str:
        return 'Holster'


class Kneepads(Gear):
    @property
    def type(self) -> str:
        return 'Kneepads'


Gears = tuple[Mask, Backpack, Chest, Gloves, Holster, Kneepads]
