export type AttributeType = "Attribute" | "Mod" | "Talent";

export type Attribute = {
  type: AttributeType;
  name: string;
  value: number;
  uptime: number;
  note: string;
};

export const DEFAULT_ATTRIBUTE: Attribute = {
  type: "Attribute",
  name: "Weapon Damage",
  value: 0.15,
  uptime: 1.0,
  note: "",
};
