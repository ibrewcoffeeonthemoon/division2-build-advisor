import pytest

from agent import *


@pytest.mark.parametrize('build', ['Name1', 'Name2'], indirect=True)
@pytest.mark.parametrize('new_name', ['AAAAA', 'BBBBB'])
def test_build_change_name(
    build: Build,
    new_name: str,
):
    build.name = new_name
    assert build.name == new_name


@pytest.mark.parametrize('build', ['Name1', 'Name2'], indirect=True)
def test_build_change_weapons(
    build: Build,
):
    w1 = build.primary_weapon
    w2 = build.secondary_weapon
    build.primary_weapon = Weapon(name='AAAAA', base_damage=100, rpm=100)
    build.secondary_weapon = Weapon(name='BBBBB', base_damage=100, rpm=100)
    assert id(w1) != id(build.primary_weapon)
    assert id(w2) != id(build.secondary_weapon)
    assert build.primary_weapon.name == 'AAAAA'
    assert build.secondary_weapon.name == 'BBBBB'
