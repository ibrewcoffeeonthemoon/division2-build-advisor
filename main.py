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
                WD('ARDamage', 0.15),
                WD('Expertise.30', 0.30),
                DTTOOC('DTTOOC', 0.10, uptime=0.9),
                DTA('DTA', 0.06, uptime=0.7),
                AMP1('Sadist', 0.30, uptime=0.5),
                AMP2('Ranger', 0.25),
                name='Lexington',
                base_damage=100_000,
                rpm=850,
            ),
            Weapon(
                WD('Expertise.30', 0.30),
                DTTOOC('DTTOOC', 0.10, uptime=0.9),
                DTA('DTA', 0.06, uptime=0.7),
                CHC(0.20),
                CHD(0.20),
                name='St.Elmo',
                base_damage=100_000,
                rpm=850,
            ),
        )
        .gears(
            Mask(
                WD('Red', 0.15),
                CHD(0.12),
                name='Tinkerer',
            ),
            Backpack(
                WD('Red', 0.15),
                TWD('Striker Buff', 0.65, uptime=0.8),
                CHD(0.12),
                ROF('ROF', 0.15),
                name='Striker',
            ),
            Chest(
                WD('Red', 0.15),
                TWD('Obliterate', 0.20, uptime=0.5),
                CHC(0.06),
                name='Lengmo',
            ),
            Gloves(
                WD('Red', 0.15),
                CHC(0.06),
                name='Striker',
            ),
            Holster(
                WD('Red', 0.15),
                CHC(0.06),
                name='Striker',
            ),
            Kneepads(
                WD('Red', 0.15),
                name='Striker',
            ),
        )
        .extras(
            Specialization(
                WD('WDType', 0.15),
                name='Gunner',
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
