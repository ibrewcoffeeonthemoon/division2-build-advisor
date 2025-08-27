from agent.item.weapon import Weapon


class _Weapons:
    def __init__(self) -> None:
        self._primary_weapon = Weapon(base_damage=48_500, rpm=850, name='Default')
        self._secondary_weapon = Weapon(base_damage=48_500, rpm=850, name='Default')

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
