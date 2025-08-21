from agent.item import Item


class Gear(Item):
    pass


class Mask(Gear):
    pass


class Backpack(Gear):
    pass


class Chest(Gear):
    pass


class Gloves(Gear):
    pass


class Holster(Gear):
    pass


class Kneepads(Gear):
    pass


Gears = tuple[Mask, Backpack, Chest, Gloves, Holster, Kneepads]
