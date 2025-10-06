import { State } from "@/store/data/state";

export const damage = (s: State["state"]) => {
  const primary = s["Weapons"]["Primary"];
  const baseDamage = primary.baseDamage;
  const rpm = primary.rpm;
  if (baseDamage !== null && rpm !== null) {
    const dps = baseDamage * rpm;
    return dps;
  }
  return null;
};
