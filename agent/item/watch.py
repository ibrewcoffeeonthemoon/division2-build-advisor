from agent.item import Item
from agent.item.attribute import *


class KeenersWatch(Item):
    def __init__(
        self,
        wd: float = 0.10,
        chc: float = 0.10,
        chd: float = 0.20,
        hs: float = 0.20,
    ) -> None:
        super().__init__(
            WDCore(wd, name='Watch.WD'),
            CHC(chc),
            CHD(chd),
            HS(hs),
            name='KeenersWatch',
        )

    @property
    def type(self) -> str:
        return 'Watch'
