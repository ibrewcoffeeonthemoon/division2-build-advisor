import { State } from "@/store/data/state";
import { Items } from "../type";
import { calAmplifierSums } from "./amplifier";
import { calMultiplier } from "./multiplier";

type Dmg = {
  normal: number | null;
};

const calDmg = (item: Items<"Weapons">, s: State["state"]): Dmg => {
  const weapon = s["Weapons"][item];
  const baseDamage = weapon.baseDamage!;
  const amplifierSum = calAmplifierSums(s)[item];
  const multiplier = calMultiplier(amplifierSum);
  // console.log(JSON.stringify(multiplier, null, 2));

  return {
    normal: baseDamage * multiplier.normal.bodyshot.health.nocover,
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
