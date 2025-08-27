from typing import Self, Unpack

from agent.item.attribute import _Attribute
from agent.item.gear import Backpack as Backpack_
from agent.item.gear import Chest as Chest_
from agent.item.gear import GearKwargs, Gears
from agent.item.gear import Gloves as Gloves_
from agent.item.gear import Holster as Holster_
from agent.item.gear import Kneepads as Kneepads_
from agent.item.gear import Mask as Mask_


class _Gears:
    def __init__(self) -> None:
        self._mask: Mask_ = Mask_()
        self._backpack: Backpack_ = Backpack_()
        self._chest: Chest_ = Chest_()
        self._gloves: Gloves_ = Gloves_()
        self._holster: Holster_ = Holster_()
        self._kneepads: Kneepads_ = Kneepads_()

        # call the next mixin in the MRO
        super().__init__()

    @property
    def mask(self) -> Mask_:
        return self._mask

    @mask.setter
    def mask(self, mask: Mask_) -> None:
        self._mask = mask

    @property
    def backpack(self) -> Backpack_:
        return self._backpack

    @backpack.setter
    def backpack(self, backpack: Backpack_) -> None:
        self._backpack = backpack

    @property
    def chest(self) -> Chest_:
        return self._chest

    @chest.setter
    def chest(self, chest: Chest_) -> None:
        self._chest = chest

    @property
    def gloves(self) -> Gloves_:
        return self._gloves

    @gloves.setter
    def gloves(self, gloves: Gloves_) -> None:
        self._gloves = gloves

    @property
    def holster(self) -> Holster_:
        return self._holster

    @holster.setter
    def holster(self, holster: Holster_) -> None:
        self._holster = holster

    @property
    def kneepads(self) -> Kneepads_:
        return self._kneepads

    @kneepads.setter
    def kneepads(self, kneepads: Kneepads_) -> None:
        self._kneepads = kneepads

    @property
    def _gears(self) -> Gears:
        return (
            self._mask, self._backpack,
            self._chest, self._gloves,
            self._holster, self._kneepads,
        )

    def Mask(self, *args: _Attribute, **kwargs: Unpack[GearKwargs]) -> Self:
        self._mask = Mask_(*args, **kwargs)
        return self

    def Backpack(self, *args: _Attribute, **kwargs: Unpack[GearKwargs]) -> Self:
        self._backpack = Backpack_(*args, **kwargs)
        return self

    def Chest(self, *args: _Attribute, **kwargs: Unpack[GearKwargs]) -> Self:
        self._chest = Chest_(*args, **kwargs)
        return self

    def Gloves(self, *args: _Attribute, **kwargs: Unpack[GearKwargs]) -> Self:
        self._gloves = Gloves_(*args, **kwargs)
        return self

    def Holster(self, *args: _Attribute, **kwargs: Unpack[GearKwargs]) -> Self:
        self._holster = Holster_(*args, **kwargs)
        return self

    def Kneepads(self, *args: _Attribute, **kwargs: Unpack[GearKwargs]) -> Self:
        self._kneepads = Kneepads_(*args, **kwargs)
        return self

    def add_gears(
        self,
        mask: Mask_,
        backpack: Backpack_,
        chest: Chest_,
        gloves: Gloves_,
        holster: Holster_,
        kneepads: Kneepads_,
    ) -> Self:
        self._mask = mask
        self._backpack = backpack
        self._chest = chest
        self._gloves = gloves
        self._holster = holster
        self._kneepads = kneepads
        return self
