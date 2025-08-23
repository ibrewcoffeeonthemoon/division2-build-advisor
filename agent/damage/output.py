from dataclasses import dataclass


@dataclass(kw_only=True)
class Stats:
    weapon_name: str

    @dataclass(kw_only=True)
    class Data:
        CHC: float
        CHD: float
        HS: float
        HSC: float
    data: Data


@dataclass(kw_only=True)
class Formula:
    weapon_name: str

    @dataclass(kw_only=True)
    class Data:
        DMGx: float
        WD: float
        TWD: float
        AMP1: float
        AMP2: float
        AMP3: float
        Crit_HS: float
        DTA_DTH: float
        DTTOOC: float
        DPSx: float
        ROF: float
    data: Data


@dataclass(kw_only=True)
class Breakdown:
    weapon_name: str

    @dataclass(kw_only=True)
    class Data:
        @dataclass(kw_only=True)
        class Attribute:
            name: str
            expected_value: float
        DMG: float
        BaseDamage: float
        WD: list[Attribute]
        TWD: list[Attribute]
        AMP1: list[Attribute]
        AMP2: list[Attribute]
        AMP3: list[Attribute]
        CHC: float
        CHD: float
        HS: float
        HSC: float
        _DTA_DTH: list[Attribute]
        DTTOOC: list[Attribute]
    data: Data


@dataclass(kw_only=True)
class Gradients:
    name: str
    grad_format: str

    @dataclass(kw_only=True)
    class Items:
        @dataclass(kw_only=True)
        class Item:
            name: str
            type: str

            @dataclass(kw_only=True)
            class Attribute:
                name: str
                value: float
                grad: float
            attrs: list[Attribute]
        items: list[Item]
    items_ls: list[Items]
