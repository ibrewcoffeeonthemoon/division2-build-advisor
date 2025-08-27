from typing import Self

from agent.item.gear import (Backpack, Chest, Gears, Gloves, Holster, Kneepads,
                             Mask)


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
