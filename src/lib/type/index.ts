import { AMPLIFIERS } from "../constant";

export type AttributeType = "Attribute" | "Mod" | "Talent";

export type Amplifier = (typeof AMPLIFIERS)[number];

export type Attribute = {
  type: AttributeType;
  name: string;
  value: number;
  uptime: number;
  note: string;
  amplifier: Amplifier;
};

export const DEFAULT_ATTRIBUTE: Attribute = {
  type: "Attribute",
  name: "Weapon Damage",
  value: 0.15,
  uptime: 1.0,
  note: "",
  amplifier: "WD",
};
