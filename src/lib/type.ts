import { AMPLIFIERS, ATTRIBUTE_TYPES, SCHEMA, WEAPON_TYPES } from "./constant";

export type Schema = typeof SCHEMA;

export type Sections = keyof Schema;

export type Items<S extends Sections> = keyof Schema[S];

export type SectionRecords<T> = {
  [S in Sections]: T;
};

export type ItemRecords<T> = {
  [S in Sections]: {
    [M in Items<S>]: T;
  };
};

export type WeaponType = (typeof WEAPON_TYPES)[number];

export type AttributeType = (typeof ATTRIBUTE_TYPES)[number];

export type Amplifier = (typeof AMPLIFIERS)[number];

export type Attribute = {
  type: AttributeType;
  name: string;
  value: number | null;
  uptime: number;
  note: string;
  amplifier: Amplifier;
};
