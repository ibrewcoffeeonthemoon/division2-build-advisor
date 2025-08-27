import pytest

from agent import *
from tests.builds import build_creators


@pytest.mark.parametrize('build', build_creators, indirect=True)
@pytest.mark.parametrize('new_name', ['AAAAA', 'BBBBB'])
def test_build_change_name(
    build: Build,
    new_name: str,
):
    build.name = new_name
    assert build.name == new_name


@pytest.mark.parametrize('build', build_creators, indirect=True)
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


@pytest.mark.parametrize('build', build_creators, indirect=True)
def test_build_change_gears(
    build: Build,
):
    g1 = build.mask
    g2 = build.backpack
    g3 = build.chest
    g4 = build.gloves
    g5 = build.holster
    g6 = build.kneepads
    build.mask = Mask(name='AAAAA')
    build.backpack = Backpack(name='BBBBB')
    build.chest = Chest(name='CCCCC')
    build.gloves = Gloves(name='DDDDD')
    build.holster = Holster(name='EEEEE')
    build.kneepads = Kneepads(name='FFFFF')
    assert id(g1) != id(build.mask)
    assert id(g2) != id(build.backpack)
    assert id(g3) != id(build.chest)
    assert id(g4) != id(build.gloves)
    assert id(g5) != id(build.holster)
    assert id(g6) != id(build.kneepads)
    assert build.mask.name == 'AAAAA'
    assert build.backpack.name == 'BBBBB'
    assert build.chest.name == 'CCCCC'
    assert build.gloves.name == 'DDDDD'
    assert build.holster.name == 'EEEEE'
    assert build.kneepads.name == 'FFFFF'
