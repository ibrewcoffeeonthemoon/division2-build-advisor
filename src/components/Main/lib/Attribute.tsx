export type Attribute = {
  type: "Attribute" | "Mod" | "Talent";
  name: string;
  value: number;
  uptime: number;
};
