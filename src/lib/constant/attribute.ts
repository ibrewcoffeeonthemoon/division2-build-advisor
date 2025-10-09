import { Amplifier, Attribute } from "../type";
import { WDTYPE_NAMES } from "./weapon";

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
