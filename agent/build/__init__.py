from copy import deepcopy
from functools import cache
from typing import Self, Type, TypeVar

from agent.build.damage import DMG, DPS, DMGx, DPSx, _ComputeGraphManager
from agent.item.attribute import *
from agent.item.gear import Backpack, Chest, Gloves, Holster, Kneepads, Mask
from agent.item.specialization import Specialization
from agent.item.watch import KeenersWatch
from agent.item.weapon import Weapon
from agent.utils import merge_text_side_by_side

T = TypeVar('T', bound=_ComputeGraphManager)


class Build:
    def __init__(
        self,
        *,
        chc_basic: float = 0.10,
        chd_basic: float = 0.25,
        hs_basic: float = 0.55,
        hsc_basic: float = 0.2,
    ) -> None:
        self._chc_basic = chc_basic
        self._chd_basic = chd_basic
        self._hs_basic = hs_basic
        self._hsc_basic = hsc_basic

    @cache
    def _graph_manager(self, cls: Type[T], id: int) -> T:
        return cls(
            deepcopy(self._weapons[id]),
            deepcopy(self._gears),
            deepcopy(self._extras),
            chc_basic=self._chc_basic,
            chd_basic=self._chd_basic,
            hs_basic=self._hs_basic,
            hsc_basic=self._hsc_basic,
        )

    @cache
    def dmg_x(self, id: int = 0) -> DMGx:
        return self._graph_manager(DMGx, id)

    @cache
    def dmg(self, id: int = 0) -> DMG:
        return self._graph_manager(DMG, id)

    @cache
    def dps_x(self, id: int = 0) -> DPS:
        return self._graph_manager(DPSx, id)

    @cache
    def dps(self, id: int = 0) -> DPS:
        return self._graph_manager(DPS, id)

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

    # utils

    def gradients(self) -> None:
        txt1 = self.dps_x(0).gradients
        txt2 = self.dps_x(1).gradients

        txt = merge_text_side_by_side(txt1, txt2)

        print(txt)
