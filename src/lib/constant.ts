import { Attribute } from "./type";

export const AMPLIFIERS = [
  "WD",
  "TWD",
  "AMP1",
  "AMP2",
  "AMP3",
  "CRIT_HS",
  "DTA_DTH",
  "DTTOOC",
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
