from copy import deepcopy
from functools import cache
from typing import Self

from agent.damage import DMG, DMGx
from agent.item.attribute import *
from agent.item.gear import Backpack, Chest, Gloves, Holster, Kneepads, Mask
from agent.item.specialization import Specialization
from agent.item.watch import KeenersWatch
from agent.item.weapon import Weapon


class Build:
    def __init__(
        self,
        *,
        chc_basic: float = 0.10,
        chd_basic: float = 0.25,
        hs_basic: float = 0.50,
        hsc_basic: float = 0.2,
    ) -> None:
        self._chc_basic = chc_basic
        self._chd_basic = chd_basic
        self._hs_basic = hs_basic
        self._hsc_basic = hsc_basic

    @cache
    def dmg(self, id: int = 0) -> DMG:
        return DMG(
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
        return DMGx(
            deepcopy(self._weapons[id]),
            deepcopy(self._gears),
            deepcopy(self._extras),
            chc_basic=self._chc_basic,
            chd_basic=self._chd_basic,
            hs_basic=self._hs_basic,
            hsc_basic=self._hsc_basic,
        )

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
