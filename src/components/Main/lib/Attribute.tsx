export type AttributeType = "Attribute" | "Mod" | "Talent";

export type Attribute = {
  type: AttributeType;
  name: string;
  value: number;
  uptime: number;
};
