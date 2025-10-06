import { State } from "@/store/data/state";

export type Damage = {
  dmg: number | null;
  dps: number | null;
};

export const damage = (s: State["state"]): Damage => {
  const primary = s["Weapons"]["Primary"];
  const baseDamage = primary.baseDamage;
  const rpm = primary.rpm;
  const valid = baseDamage !== null && rpm !== null;
  return {
    dmg: baseDamage,
    dps: valid ? (baseDamage * rpm) / 60 : null,
  };
};
