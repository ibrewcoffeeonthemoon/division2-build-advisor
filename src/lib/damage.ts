import { State } from "@/store/data/state";
import { Items } from "./type";

type Dmg = {
  normal: number | null;
};

const calDmg = (item: Items<"Weapons">, s: State["state"]): Dmg => {
  const weapon = s["Weapons"][item];
  const baseDamage = weapon.baseDamage;
  return {
    normal: baseDamage,
  };
};

type Dps = {
  resultDmg: Dmg;
  dps: number | null;
};

const calDps = (item: Items<"Weapons">, s: State["state"]): Dps => {
  const weapon = s["Weapons"][item];
  const resultDmg = calDmg(item, s);
  const rpm = weapon.rpm;
  const dps = (resultDmg.normal! * rpm!) / 60;
  return { resultDmg, dps };
};

export type Damage = {
  dmg: number | null;
  dps: number | null;
};

export const damage = (item: Items<"Weapons">, s: State["state"]): Damage => {
  const resultDps = calDps(item, s);
  return {
    dmg: resultDps.resultDmg.normal,
    dps: resultDps.dps,
  };
};
