import { Attribute } from "./type";

export const SCHEMA = {
  Weapons: ["Primary", "Secondary", "Sidearm", "Signature"] as const,
  Gears: [
    "Mask",
    "Backpack",
    "Chest",
    "Gloves",
    "Holster",
    "Kneepads",
  ] as const,
  Extras: ["Watch", "Specialization"] as const,
} as const;

export const SECTIONS = ["Weapons", "Gears", "Extras"] as const;

export const WEAPONS = [
  "Primary",
  "Secondary",
  "Sidearm",
  "Signature",
] as const;
export const GEARS = [
  "Mask",
  "Backpack",
  "Chest",
  "Gloves",
  "Holster",
  "Kneepads",
] as const;
export const EXTRAS = ["Watch", "Specialization"] as const;

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
