import { CATEGORY_NAMES, ITEM_NAMES } from "../constant";
import { Attribute } from "./attribute";
import { WeaponType } from "./weapon";

export type CategoryKey = (typeof CATEGORY_NAMES)[number];

export type Items<C extends CategoryKey> = (typeof ITEM_NAMES)[C][number];

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
