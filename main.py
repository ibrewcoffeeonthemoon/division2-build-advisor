import torch

from agent.build import Build
from agent.item.attribute import *
from agent.item.gear import *
from agent.item.specialization import Specialization
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
        Build()
        .weapons(
            Lexington(
                AMP1(0.30, uptime=0.5, name='Sadist'),
                AMP2(0.25, name='Ranger'),
                expertise=30,
            ),
            StElmoEngine(expertise=16),
        )
        .gears(
            Mask(
                RedCore(),
                CHD(0.12),
                name='Tinkerer',
            ),
            Backpack(
                RedCore(),
                TWD(0.65, uptime=0.8, name='Striker'),
                CHD(0.12),
                ROF(0.15, name='ROF'),
                name='Striker',
            ),
            Chest(
                RedCore(),
                TWD(0.20, uptime=0.5, name='Obliterate'),
                CHC(0.06),
                name='Lengmo',
            ),
            Gloves(
                RedCore(),
                CHC(0.06),
                name='Striker',
            ),
            Holster(
                RedCore(),
                CHC(0.06),
                name='Striker',
            ),
            Kneepads(
                RedCore(),
                name='Striker',
            ),
        )
        .extras(
            Specialization(
                WD(0.15, name='WDType'),
                name='Gunner',
            ),
            KeenersWatch(),
        )
    )

    # result
    for i in range(2):
        v = build.dps_x(i)
        v.stats()
        v.formula()
        v.breakdown()
        v.gradients()


if __name__ == "__main__":
    main()
