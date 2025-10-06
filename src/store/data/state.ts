import { Attribute } from "@/lib/type";
import { createItemRecords } from "../record";

type ItemState = {
  name: string;
  baseDamage: number | null;
  rpm: number | null;
  attributes: Attribute[];
};

export type State = {
  state: Record<string, Record<string, ItemState>>;
};

export const state: () => State["state"] = () =>
  createItemRecords((section) => {
    const inWeapons = section === "Weapons";
    return {
      name: "",
      baseDamage: inWeapons ? 0 : null,
      rpm: inWeapons ? 0 : null,
      attributes: [],
    };
  });
