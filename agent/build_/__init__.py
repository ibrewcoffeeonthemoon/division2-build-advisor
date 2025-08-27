from copy import deepcopy
from functools import cache, cached_property
from typing import Self, Type, TypeVar

from agent.build_.weapons import _Weapons
from agent.damage import DMG, DPS, DMGx, DPSx, _ComputeGraphManager
from agent.item.attribute import *
from agent.item.gear import (Backpack, Chest, Gears, Gloves, Holster, Kneepads,
                             Mask)
from agent.item.specialization import Specialization
from agent.item.watch import KeenersWatch
from agent.item.weapon import Weapon
from agent.result import Result
from agent.result._handler import _ResultHandler
from agent.utils import merge_text_side_by_side

T = TypeVar('T', bound=_ComputeGraphManager)


class _Gears:
    def __init__(self) -> None:
        self._mask: Mask
        self._backpack: Backpack
        self._chest: Chest
        self._gloves: Gloves
        self._holster: Holster
        self._kneepads: Kneepads

    @property
    def mask(self) -> Mask:
        return self._mask

    @mask.setter
    def mask(self, mask: Mask) -> None:
        self._mask = mask

    @property
    def backpack(self) -> Backpack:
        return self._backpack

    @backpack.setter
    def backpack(self, backpack: Backpack) -> None:
        self._backpack = backpack

    @property
    def chest(self) -> Chest:
        return self._chest

    @chest.setter
    def chest(self, chest: Chest) -> None:
        self._chest = chest

    @property
    def gloves(self) -> Gloves:
        return self._gloves

    @gloves.setter
    def gloves(self, gloves: Gloves) -> None:
        self._gloves = gloves

    @property
    def holster(self) -> Holster:
        return self._holster

    @holster.setter
    def holster(self, holster: Holster) -> None:
        self._holster = holster

    @property
    def kneepads(self) -> Kneepads:
        return self._kneepads

    @kneepads.setter
    def kneepads(self, kneepads: Kneepads) -> None:
        self._kneepads = kneepads

    @property
    def _gears(self) -> Gears:
        return (
            self._mask, self._backpack,
            self._chest, self._gloves,
            self._holster, self._kneepads,
        )


class _Extras:
    def __init__(self) -> None:
        self._specialization: Specialization
        self._keeners_watch: KeenersWatch

    @property
    def specialization(self) -> Specialization:
        return self._specialization

    @specialization.setter
    def specialization(self, specialization: Specialization) -> None:
        self._specialization = specialization

    @property
    def keeners_watch(self) -> KeenersWatch:
        return self._keeners_watch

    @keeners_watch.setter
    def keeners_watch(self, keeners_watch: KeenersWatch) -> None:
        self._keeners_watch = keeners_watch

    @property
    def _extras(self) -> tuple[Specialization, KeenersWatch]:
        return (
            self._specialization,
            self._keeners_watch,
        )


class Build(_Weapons, _Gears, _Extras):
    def __init__(
        self,
        name: str,
        *,
        chc_basic: float = 0.10,
        chd_basic: float = 0.25,
        hs_basic: float = 0.55,
        hsc_basic: float = 0.2,
    ) -> None:
        self._name = name
        super(_Weapons).__init__()
        super(_Gears).__init__()
        super(_Extras).__init__()
        self._chc_basic = chc_basic
        self._chd_basic = chd_basic
        self._hs_basic = hs_basic
        self._hsc_basic = hsc_basic

        # state
        self._finalized = False

    # properties

    @property
    def name(self) -> str:
        return self._name

    @name.setter
    def name(self, name: str) -> None:
        self._name = name

    # chain methods

    def weapons(
        self,
        primary_weapon: Weapon,
        secondary_weapon: Weapon,
    ) -> Self:
        self._primary_weapon = primary_weapon
        self._secondary_weapon = secondary_weapon
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
        self._mask = mask
        self._backpack = backpack
        self._chest = chest
        self._gloves = gloves
        self._holster = holster
        self._kneepads = kneepads
        return self

    def extras(
        self,
        specialization: Specialization,
        keeners_watch: KeenersWatch,
    ) -> Self:
        self._specialization = specialization
        self._keeners_watch = keeners_watch
        return self

    @cache
    def _graph_manager(self, cls: Type[T], id: int) -> T:
        """
        This cached function ensure one build will create independent compute graph
        for each unique metric calculation, and will only create it once
        """
        # once this flag has been set, should not modify any build items anymore
        self._finalized = True

        return cls(
            self._weapons[id],
            self._gears,
            self._extras,
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

    # utils

    def copy(self) -> Self:
        assert not self._finalized, \
            'This build has already finalized. Only copy non-finalized build, or calculation results may be wrong.'

        return deepcopy(self)

    @classmethod
    def compare(
        cls,
        *handlers: _ResultHandler,
        weapon_id: int = 0,
    ) -> None:
        print(merge_text_side_by_side(
            *[h.text(weapon_id) for h in handlers]
        ))
