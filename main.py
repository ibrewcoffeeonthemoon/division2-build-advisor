from agent.build import Build
from agent.inventory.attribute import *
from agent.inventory.item.gear import *
from agent.inventory.item.watch import KeenersWatch
from agent.inventory.item.weapon import Weapon


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

    # 6 red cords, 40% weapon type bonus, 25% from keener's watch
    # wd = torch.tensor(6*0.15+0.4+0.25, requires_grad=True)
    # basic Striker full buf
    # twd = torch.tensor(0.65, requires_grad=True)

    # create the graph
    build = Build(
        Weapon(
            'Lexington',
            WD('ARDamage', 0.15),
            WD('Expertise(30)', 0.30),
            DTTOOC('DTTOOC', 0.10, uptime=0.9),
            DTA('DTA', 0.06, uptime=0.7),
            AMP1('Sadist', 0.30, uptime=0.5),
            AMP2('Ranger', 0.25),
        ),
        Mask(
            'Tinkerer',
            WD('RedCore', 0.15),
            CHD(0.12),
        ),
        Backpack(
            'Striker',
            WD('RedCore', 0.15),
            TWD('Buff', 0.65, uptime=0.8),
            CHD(0.12),
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
        KeenersWatch(),
    )

    # result
    build.stats()
    build.formula()
    build.gradients()


if __name__ == "__main__":
    main()
