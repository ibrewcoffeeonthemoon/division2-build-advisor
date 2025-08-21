from agent.inventory.attribute import *
from agent.inventory.item import Item


class KeenersWatch(Item):
    def __init__(
        self,
        wd: float = 0.10,
        chc: float = 0.10,
        chd: float = 0.20,
        hs: float = 0.20,
    ) -> None:
        super().__init__(
            'KeenersWatch',
            WD('WD', wd),
            CHC(chc),
            CHD(chd),
            HS(hs),
        )
