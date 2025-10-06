import { State } from "@/store/data/state";
import { Amplifier, Attribute, Items } from "../type";
import { calAmplifierSums } from "./amplifier";

const accumulate = (s: State["state"], amp: Amplifier): number => {
  const itemStates = Object.values(s).flatMap((items) => Object.values(items));
  const attrs = itemStates.flatMap((item) => Object.values(item.attributes));
  const matchAttrs = attrs.filter((attr) => attr.amplifier === amp);
  const expValue = (attr: Attribute) => attr.value * attr.uptime;
  const valueSum = matchAttrs.reduce((sum, attr) => sum + expValue(attr), 0);
  return valueSum;
};

type Dmg = {
  normal: number | null;
};

const calDmg = (item: Items<"Weapons">, s: State["state"]): Dmg => {
  const weapon = s["Weapons"][item];
  const baseDamage = weapon.baseDamage!;
  const ampSums = calAmplifierSums(s);
  const mulWDCore = 1 + (ampSums[item].WDCore || 0);
  return {
    normal: baseDamage * mulWDCore,
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
