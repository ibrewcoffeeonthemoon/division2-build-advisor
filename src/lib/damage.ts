import { State } from "@/store/data/state";
import { Items } from "./type";

export type Damage = {
  dmg: number | null;
  dps: number | null;
};

export const damage = (item: Items<"Weapons">, s: State["state"]): Damage => {
  const primary = s["Weapons"][item];
  const baseDamage = primary.baseDamage;
  const rpm = primary.rpm;
  const valid = baseDamage !== null && rpm !== null;
  return {
    dmg: baseDamage,
    dps: valid ? (baseDamage * rpm) / 60 : null,
  };
};
