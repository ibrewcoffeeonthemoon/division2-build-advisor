from typing import Self, Unpack

from agent.item.weapon import Weapon, WeaponArgs, WeaponKwargs


class _Weapons:
    def __init__(self) -> None:
        self._primary_weapon = Weapon()
        self._secondary_weapon = Weapon()

        # call the next mixin in the MRO
        super().__init__()

    @property
    def primary_weapon(self) -> Weapon:
        return self._primary_weapon

    @primary_weapon.setter
    def primary_weapon(self, weapon: Weapon) -> None:
        self._primary_weapon = weapon

    @property
    def secondary_weapon(self) -> Weapon:
        return self._secondary_weapon

    @secondary_weapon.setter
    def secondary_weapon(self, weapon: Weapon) -> None:
        self._secondary_weapon = weapon

    @property
    def _weapons(self) -> tuple[Weapon, Weapon]:
        return (self._primary_weapon, self._secondary_weapon)

    def PrimaryWeapon(self, *args: WeaponArgs, **kwargs: Unpack[WeaponKwargs]) -> Self:
        self._primary_weapon = Weapon(*args, **kwargs)
        return self

    def SecondaryWeapon(self, *args: WeaponArgs, **kwargs: Unpack[WeaponKwargs]) -> Self:
        self._secondary_weapon = Weapon(*args, **kwargs)
        return self

    def weapons(
        self,
        primary_weapon: Weapon,
        secondary_weapon: Weapon,
    ) -> Self:
        self._primary_weapon = primary_weapon
        self._secondary_weapon = secondary_weapon
        return self
