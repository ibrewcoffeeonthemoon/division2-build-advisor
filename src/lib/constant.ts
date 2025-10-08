import { Amplifier, Attribute, WeaponType } from "./type";

export const SCHEMA = {
  Weapons: {
    Primary: null,
    Secondary: null,
    Sidearm: null,
    Signature: null,
  },
  Gears: {
    Mask: null,
    Backpack: null,
    Chest: null,
    Gloves: null,
    Holster: null,
    Kneepads: null,
  },
  Extras: {
    Watch: null,
    Specialization: null,
  },
} as const;

export const WEAPON_TYPES = [
  "AR",
  "LMG",
  "SMG",
  "Shotgun",
  "Rifle",
  "MMR",
  "Pistol",
  "Signature",
] as const;

export const WEAPON_TYPES_WDTYPE_MAP = Object.fromEntries(
  WEAPON_TYPES.map((name) => [name, name + " Damage"]),
) as Record<WeaponType, string>;

export const WDTYPE_NAMES = Object.values(WEAPON_TYPES_WDTYPE_MAP);

export const AMPLIFIERS = [
  "WDCore",
  "WDType",
  "WDTalent",
  "TWD",
  "AMP1",
  "AMP2",
  "AMP3",
  "CHC",
  "CHD",
  "HS",
  "DTA",
  "DTH",
  "DTTOOC",
  "ROF",
  "None",
] as const;

export const ATTRIBUTE_TYPES = ["Attribute", "Mod", "Talent"] as const;

export const ATTRIBUTES: Record<Amplifier, string[]> = {
  WDCore: ["Weapon Damage"],
  WDType: WDTYPE_NAMES,
  WDTalent: ["< Custom >"],
  TWD: ["< Custom >"],
  CHC: ["Critical Hit Chance"],
  CHD: ["Critical Hit Damage"],
  HS: ["Headshot Damage"],
  DTA: ["Damage to Armor"],
  DTH: ["Damage to Health"],
  DTTOOC: ["DMG to Target out of Cover"],
  AMP1: ["< Custom >"],
  AMP2: ["< Custom >"],
  AMP3: ["< Custom >"],
  ROF: ["Rate of Fire"],
  None: [
    "Magazine size",
    "Reload Speed",
    "Stability",
    "Accuracy",
    "Weapon Handling",
    "Optimal Range",
    "Ammo Capacity",
    "Swap Speed",
    "Armor",
    "Health",
    "Armor Regeneration",
    "Hazard Protection",
    "Explosive Resistance",
    "Skill Tier",
    "Status Effects",
    "Skill Efficiency",
    "Skill Repair",
    "Skill Damage",
    "Skill Haste",
    "Skill Duration",
  ],
};

export const DEFAULT_ATTRIBUTE: Attribute = {
  type: "Attribute",
  name: "Weapon Damage",
  value: 0.15,
  uptime: 1.0,
  note: "",
  amplifier: "WDCore",
};
