import torch

from agent.build import Build
from agent.item.attribute import *
from agent.item.gear import *
from agent.item.specialization import Specialization
from agent.item.watch import KeenersWatch
from agent.item.weapon import Weapon

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
            Weapon(
                'Lexington',
                WD('ARDamage', 0.15),
                WD('Expertise(30)', 0.30),
                DTTOOC('DTTOOC', 0.10, uptime=0.9),
                DTA('DTA', 0.06, uptime=0.7),
                AMP1('Sadist', 0.30, uptime=0.5),
                AMP2('Ranger', 0.25),
                base_damage=100_000,
                rpm=850,
            ),
            Weapon(
                'St.Elmo',
                WD('Expertise(30)', 0.30),
                DTTOOC('DTTOOC', 0.10, uptime=0.9),
                DTA('DTA', 0.06, uptime=0.7),
                CHC(0.20),
                CHD(0.20),
                base_damage=100_000,
                rpm=850,
            ),
        )
        .gears(
            Mask(
                'Tinkerer',
                WD('RedCore', 0.15),
                CHD(0.12),
            ),
            Backpack(
                'Striker',
                WD('RedCore', 0.15),
                TWD('Striker Buff', 0.65, uptime=0.8),
                CHD(0.12),
                ROF('Striker gearset bonus', 0.15),
            ),
            Chest(
                'Lengmo',
                WD('RedCore', 0.15),
                TWD('Obliterate', 0.20, uptime=0.5),
                CHC(0.06),
            ),
            Gloves(
                'Striker',
                WD('RedCore', 0.15),
                CHC(0.06),
            ),
            Holster(
                'Striker',
                WD('RedCore', 0.15),
                CHC(0.06),
            ),
            Kneepads(
                'Striker',
                WD('RedCore', 0.15),
            ),
        )
        .extras(
            Specialization(
                'Gunner',
                WD('WDType', 0.15),
            ),
            KeenersWatch(),
        )
    )

    # result
    for i in range(2):
        v = build.dps(i)
        v.stats()
        v.formula()
        v.breakdown()
        v.gradients()


if __name__ == "__main__":
    main()
