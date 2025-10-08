import { Item, WeaponType } from "@/lib/type";
import { createItemRecords } from "../record";

export type State = {
  state: {
    name: string;
    items: Record<string, Record<string, Item>>;
  };
};

export const state: () => State["state"] = () => ({
  name: "Default",
  items: createItemRecords((category) => {
    const inWeapons = category === "Weapons";
    return {
      name: "",
      baseDamage: inWeapons ? 0 : null,
      rpm: inWeapons ? 0 : null,
      weaponType: inWeapons ? ("AR" as WeaponType) : null,
      attributes: [],
    };
  }),
});
