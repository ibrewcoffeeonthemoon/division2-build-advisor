import pytest

from agent import *


@pytest.mark.parametrize(
    "result",
    [
        "dmg",
        "dmg_x",
        "dps",
        "dps_x"
    ]
)
@pytest.mark.parametrize(
    "result_handler",
    [
        "stats",
        "formula",
        "breakdown",
        "gradients",
        "delta"
    ]
)
@pytest.mark.parametrize('weapon_id', [0, 1])
def test_main_compare(
    result: str,
    result_handler: str,
    weapon_id: int,
    capsys: pytest.CaptureFixture[str],
):
    build0 = (
        Build('6 Red Lexington Ranger')
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
    build1 = build0.copy()

    left = getattr(getattr(build0, result), result_handler)
    right = getattr(getattr(build1, result), result_handler)
    Build.compare(left, right, weapon_id=weapon_id)
    assert capsys.readouterr()
