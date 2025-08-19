from build import Build
from gear import *


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
        Mask(
            'Coyote',
            WD('RedCore', 0.15),
        ),
        Backpack(
            'Striker',
            WD('RedCore', 0.15),
            TWD('Buff', 0.65, uptime=0.8)
        ),
        Chest(
            'Lengmo',
            WD('RedCore', 0.15),
            TWD('Obliterate', 0.20, uptime=0.5)
        ),
        Gloves(
            'Striker',
            WD('RedCore', 0.15),
        ),
        Holster(
            'Striker',
            WD('RedCore', 0.15),
        ),
        Kneepads(
            'Striker',
            WD('RedCore', 0.15),
        ),
    )

    # result
    print((
        'DMGx = '
        f'WD[{build.wd.item():.4f}] x '
        f'TWD[{build.twd.item():.4f}]'
        '\n'
    ))

    print(f'DMG Gradients:')
    for gear in build.gears:
        print(f'{" "*2}{gear.name}:')
        for attr in gear.attributes:
            print(f'{" "*4}{attr.name:12s}: {attr.value.grad:.4f}')


if __name__ == "__main__":
    main()
