from agent import *


def make_build_by_defaualt(name: str = 'Default') -> Build:
    return Build(name)


def make_build_by_raw_attributes(name: str = 'Raw') -> Build:
    return (
        Build(name)
        .add_primary_weapons(
            Weapon(
                WDCore(0.01, name='Expertise'),
                WDType(0.15, name='AR'),
                DTH(0.21, uptime=0.3),
                DTTOOC(0.10, uptime=0.9),
                AMP2(0.25, name='Ranger'),
                base_damage=48_700,
                rpm=850,
                name='Weapon1',
            ),
        )
        .add_secondary_weapons(
            Weapon(
                WDCore(0.01, name='Expertise'),
                WDType(0.15, name='AR'),
                DTH(0.21, uptime=0.3),
                DTTOOC(0.10, uptime=0.9),
                base_damage=46_900,
                rpm=850,
                name='Weapon2',
            ),
        )
        .add_gears(
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
        .add_specialization(
            Gunner(WDType(0.15, name='Gunner.WDType')),
        )
        .add_keeners_watch(
            KeenersWatch(),
        )
    )


def make_build_by_item_helpers(name: str = 'Helper') -> Build:
    return (
        Build(name)
        .PrimaryWeapon(
            WDCore(0.01, name='Expertise'),
            WDType(0.15, name='AR'),
            DTH(0.21, uptime=0.3),
            DTTOOC(0.10, uptime=0.9),
            AMP2(0.25, name='Ranger'),
            base_damage=48_700,
            rpm=850,
            name='Weapon1',
        )
        .SecondaryWeapon(
            WDCore(0.01, name='Expertise'),
            WDType(0.15, name='AR'),
            DTH(0.21, uptime=0.3),
            DTTOOC(0.10, uptime=0.9),
            base_damage=46_900,
            rpm=850,
            name='Weapon2',
        )
        .Mask(
            RedCore(),
            CHC(0.06),
            CHD(0.12),
            CHD(0.12, name='Mod.CHD'),
            CHD(0.25, uptime=0.33, name='Short.CHD'),
            CHD(0.10, uptime=0.33, name='Mid.CHD'),
            CHC(0.10, uptime=0.33, name='Mid.CHC'),
            CHC(0.25, uptime=0.33, name='Long.CHC'),
            name='Coyote',
        )
        .Backpack(
            RedCore(),
            CHC(0.06),
            CHD(0.12),
            CHD(0.12, name='Mod.CHD'),
            TWD(0.65, uptime=0.8, name='Striker'),
            ROF(0.15, name='ROF'),
            name='Striker',
        )
        .Chest(
            RedCore(),
            CHD(0.12),
            CHD(0.12, name='Mod.CHD'),
            name='Lengmo',
        )
        .Gloves(
            RedCore(),
            CHD(0.12),
            name='Striker',
        )
        .Holster(
            RedCore(),
            CHD(0.12),
            name='Striker',
        )
        .Kneepads(
            RedCore(),
            CHD(0.12),
            name='Striker',
        )
        .Specialization(
            WDType(0.15, name='Gunner.WDType')
        )
        .KeenersWatch()
    )


def make_build_by_assignment(name: str = 'Assignment') -> Build:
    b = Build(name)
    b.primary_weapon = Weapon()
    b.secondary_weapon = Weapon()
    b.mask = Mask()
    b.backpack = Backpack()
    b.chest = Chest()
    b.gloves = Gloves()
    b.holster = Holster()
    b.kneepads = Kneepads()
    b.specialization = Specialization()
    b.keeners_watch = KeenersWatch()
    return b


build_creators = (
    make_build_by_defaualt,
    make_build_by_raw_attributes,
    make_build_by_item_helpers,
    make_build_by_assignment,
)
build_results = [
    'dmg',
    'dmg_x',
    'dps',
    'dps_x'
]
build_result_handlers = [
    'stats',
    'formula',
    'breakdown',
    'gradients',
    'delta'
]
