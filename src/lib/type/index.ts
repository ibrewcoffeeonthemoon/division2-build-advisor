import { AMPLIFIERS, ATTRIBUTE_TYPES } from "../constant";

export type AttributeType = (typeof ATTRIBUTE_TYPES)[number];

export type Amplifier = (typeof AMPLIFIERS)[number];

export type Attribute = {
  type: AttributeType;
  name: string;
  value: number;
  uptime: number;
  note: string;
  amplifier: Amplifier;
};
