import { Attribute } from "./type";

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

export const AMPLIFIERS = [
  "WD",
  "TWD",
  "AMP1",
  "AMP2",
  "AMP3",
  "CRIT_HS",
  "DTA_DTH",
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
  amplifier: "WD",
};
