import { Attribute, WeaponType } from "./type";

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

export const DEFAULT_ATTRIBUTE: Attribute = {
  type: "Attribute",
  name: "Weapon Damage",
  value: 0.15,
  uptime: 1.0,
  note: "",
  amplifier: "WDCore",
};
