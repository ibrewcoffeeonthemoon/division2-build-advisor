from copy import deepcopy
from functools import cache, cached_property
from typing import Self, Type, TypeVar
from agent.build.result import Result

from agent.build.damage import DMG, DPS, DMGx, DPSx, _ComputeGraphManager
from agent.item.attribute import *
from agent.item.gear import Backpack, Chest, Gloves, Holster, Kneepads, Mask
from agent.item.specialization import Specialization
from agent.item.watch import KeenersWatch
from agent.item.weapon import Weapon

T = TypeVar('T', bound=_ComputeGraphManager)


class Build:
    def __init__(
        self,
        name: str,
        *,
        chc_basic: float = 0.10,
        chd_basic: float = 0.25,
        hs_basic: float = 0.55,
        hsc_basic: float = 0.2,
    ) -> None:
        self.name = name
        self._chc_basic = chc_basic
        self._chd_basic = chd_basic
        self._hs_basic = hs_basic
        self._hsc_basic = hsc_basic

    @cache
    def _graph_manager(self, cls: Type[T], id: int) -> T:
        """
        This cached function ensure one build will create independent compute graph
        for each unique metric calculation, and will only create it once
        """
        return cls(
            deepcopy(self._weapons[id]),
            deepcopy(self._gears),
            deepcopy(self._extras),
            chc_basic=self._chc_basic,
            chd_basic=self._chd_basic,
            hs_basic=self._hs_basic,
            hsc_basic=self._hsc_basic,
        )

    # result
    @cached_property
    def dmg(self) -> Result:
        return Result(self, DMG)

    @cached_property
    def dmg_x(self) -> Result:
        return Result(self, DMGx)

    @cached_property
    def dps(self) -> Result:
        return Result(self, DPS)

    @cached_property
    def dps_x(self) -> Result:
        return Result(self, DPSx)

    # chain methods

    def weapons(
        self,
        weapon1: Weapon,
        weapon2: Weapon,
    ) -> Self:
        self._weapons = (weapon1, weapon2, )
        return self

    def gears(
        self,
        mask: Mask,
        backpack: Backpack,
        chest: Chest,
        gloves: Gloves,
        holster: Holster,
        kneepads: Kneepads,
    ) -> Self:
        self._gears = (
            mask, backpack,
            chest, gloves,
            holster, kneepads,
        )
        return self

    def extras(
        self,
        specialization: Specialization,
        keeners_watch: KeenersWatch,
    ) -> Self:
        self._extras = (
            specialization,
            keeners_watch,
        )
        return self
