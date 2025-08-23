import torch

from agent.build import Build
from agent.item.attribute import *
from agent.item.gear import *
from agent.item.specialization import *
from agent.item.watch import KeenersWatch
from agent.item.weapon import *

torch.set_default_device('cpu')


def main() -> None:
    """
    dmg_x = \
        (1 + wd_core + wd_type + wd_talent) \
        * (1 + twd_talent) \
        * (1 + amp1 * amp1_uptime) \
        * (1 + amp2 * amp2_uptime) \
        * (1 + amp3 * amp3_uptime) \
        * (1 + chc * chd + hsc * hsd) \
        * (1 + dta * armor_prob + dth * (1 - armor_prob)) \
        * (1 + dttooc * ooc_prob)

    """

    # create the graph
    build = (
        Build('Lexington Ranger')
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

    # result
    Build.compare(
        build.dmg_x.delta,
        build.dps_x.delta,
    )
    # for result in (build.dmg, build.dmg_x, build.dps, build.dps_x):
    #     result.stats()
    #     result.formula()
    #     result.breakdown()
    #     result.gradients()
    #     result.delta()


if __name__ == "__main__":
    main()
