import { SCHEMA } from "../constant";
import { Attribute } from "./attribute";
import { WeaponType } from "./weapon";

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
