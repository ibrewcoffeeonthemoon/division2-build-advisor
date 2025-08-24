import pytest

from agent import *


def _make_build(name: str) -> Build:
    build = (
        Build(name)
        .weapons(
            Lexington(
                AMP2(0.25, name='Ranger'),
                expertise=30,
            ),
            StElmoEngine(expertise=16),
        )
        .gears(
            Mask(
                RedCore(),
                CHC(0.06),
                CHD(0.12),
                CHD(0.12, name='Mod.CHD'),
                CHD(0.25, uptime=0.33, name='Short.CHD'),
                CHD(0.10, uptime=0.33, name='Mid.CHD'),
                CHC(0.10, uptime=0.33, name='Mid.CHC'),
                CHC(0.25, uptime=0.33, name='Long.CHC'),
                name='Coyote',
            ),
            Backpack(
                RedCore(),
                CHC(0.06),
                CHD(0.12),
                CHD(0.12, name='Mod.CHD'),
                TWD(0.65, uptime=0.8, name='Striker'),
                ROF(0.15, name='ROF'),
                name='Striker',
            ),
            Chest(
                RedCore(),
                CHD(0.12),
                CHD(0.12, name='Mod.CHD'),
                name='Lengmo',
            ),
            Gloves(
                RedCore(),
                CHD(0.12),
                name='Striker',
            ),
            Holster(
                RedCore(),
                CHD(0.12),
                name='Striker',
            ),
            Kneepads(
                RedCore(),
                CHD(0.12),
                name='Striker',
            ),
        )
        .extras(
            Gunner(WDType(0.15, name='Gunner.WDType')),
            KeenersWatch(),
        )
    )

    return build


@pytest.fixture
def build(request) -> Build:
    return _make_build(request.param)


@pytest.fixture
def build_lexington() -> Build:
    return _make_build('6 Red Lexington Ranger')


@pytest.fixture
def build_stelmo() -> Build:
    return _make_build("6 Red St. Elmo's Engine")
