import { AMPLIFIERS, ATTRIBUTE_TYPES, SCHEMA } from "../constant";

export type Sections = keyof typeof SCHEMA;

export type Items<S extends Sections> = keyof (typeof SCHEMA)[S];

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
