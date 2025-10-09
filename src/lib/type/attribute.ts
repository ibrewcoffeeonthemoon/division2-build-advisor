import { ATTRIBUTE_TYPES, ATTRIBUTE_NAMES } from "../constant/attribute";
import { Amplifier } from "./amplifier";

export type AttributeType = (typeof ATTRIBUTE_TYPES)[number];

export type AttributeName = (typeof ATTRIBUTE_NAMES)[number];

export type Attribute = {
  type: AttributeType;
  name: string;
  value: number | null;
  uptime: number | null;
  note: string;
  amplifier: Amplifier;
};
