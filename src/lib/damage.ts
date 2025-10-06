import { State } from "@/store/data/state";
import { Items } from "./type";

type Dmg = {
  normal: number | null;
  critical: number | null;
  critical_headshot: number | null;
};

const calDmg = (item: Items<"Weapons">, s: State["state"]): Dmg => {
  const weapon = s["Weapons"][item];
  const dmg = weapon.baseDamage;
  return {
    normal: dmg,
    critical: dmg,
    critical_headshot: dmg,
  };
};

type Dps = {
  dmg: Dmg;
  dps: number | null;
};

const calDps = (item: Items<"Weapons">, s: State["state"]): Dps => {
  const weapon = s["Weapons"][item];
  const dmg = calDmg(item, s);
  const rpm = weapon.rpm;
  const dps = (dmg.normal * rpm) / 60;
  return { dmg, dps };
};

export type Damage = {
  dmg: number | null;
  dps: number | null;
};

export const damage = (item: Items<"Weapons">, s: State["state"]): Damage => {
  const result = calDps(item, s);
  return {
    dmg: result.dmg.normal,
    dps: result.dps,
  };
};
