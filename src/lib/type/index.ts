import { SCHEMA } from "../constant";
import { AMPLIFIERS } from "../constant/amplifier";
import { ATTRIBUTE_TYPES } from "../constant/attribute";
import { WEAPON_TYPES } from "../constant/weapon";

export type Schema = typeof SCHEMA;

export type CategoryKey = keyof Schema;

export type Items<C extends CategoryKey> = keyof Schema[C];

export type CategoryRecords<T> = {
  [C in CategoryKey]: T;
};

export type ItemRecords<T> = {
  [C in CategoryKey]: {
    [M in Items<C>]: T;
  };
};

export type WeaponType = (typeof WEAPON_TYPES)[number];

export type AttributeType = (typeof ATTRIBUTE_TYPES)[number];

export type Amplifier = (typeof AMPLIFIERS)[number];

export type Attribute = {
  type: AttributeType;
  name: string;
  value: number | null;
  uptime: number | null;
  note: string;
  amplifier: Amplifier;
};

export type Item = {
  name: string;
  baseDamage?: number | null;
  rpm?: number | null;
  weaponType?: WeaponType | null;
  attributes: Attribute[];
};

export type Build = {
  name: string;
  items: ItemRecords<Item>;
};
