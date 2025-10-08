import { Item, WeaponType } from "@/lib/type";
import { createItemRecords } from "../record";

export type State = {
  state: Record<string, Record<string, Item>>;
};

export const state: () => State["state"] = () =>
  createItemRecords((section) => {
    const inWeapons = section === "Weapons";
    return {
      name: "",
      baseDamage: inWeapons ? 0 : null,
      rpm: inWeapons ? 0 : null,
      weaponType: inWeapons ? ("AR" as WeaponType) : null,
      attributes: [],
    };
  });
