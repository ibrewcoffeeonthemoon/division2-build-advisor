from agent.inventory.attribute import Attribute


class Gear:
    def __init__(
        self,
        name: str,
        *attributes: Attribute,
    ) -> None:
        self.name = name
        self.attributes = attributes


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
