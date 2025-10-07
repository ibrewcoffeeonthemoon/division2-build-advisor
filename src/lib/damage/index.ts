import { State } from "@/store/data/state";
import { Items } from "../type";
import { calAmplifierSums } from "./amplifier";
import { calMultiplier } from "./multiplier";
import { createDamageRecord, DamageRecord } from "./record";

type Dmg = DamageRecord<number>;

const calDmg = (item: Items<"Weapons">, s: State["state"]): Dmg => {
  const weapon = s["Weapons"][item];
  const baseDamage = weapon.baseDamage!;
  const amplifierSum = calAmplifierSums(s)[item];
  const multiplier = calMultiplier(amplifierSum);

  const dmg = createDamageRecord(
    (n0, n1, n2, n3) => baseDamage * multiplier[n0][n1][n2][n3],
  );
  // console.log(JSON.stringify(dmg, null, 2));

  return dmg;
};

type Dps = {
  resultDmg: Dmg;
  dps: number | null;
};

const calDps = (item: Items<"Weapons">, s: State["state"]): Dps => {
  const weapon = s["Weapons"][item];
  const resultDmg = calDmg(item, s);
  const rpm = weapon.rpm;
  const dps = (resultDmg.normal.bodyshot.health.nocover! * rpm!) / 60;
  return { resultDmg, dps };
};

export type Damage = {
  dmg: number | null;
  dps: number | null;
};

export const calDamage = (
  item: Items<"Weapons">,
  s: State["state"],
): Damage => {
  const resultDps = calDps(item, s);
  return {
    dmg: resultDps.resultDmg.normal.bodyshot.health.nocover,
    dps: resultDps.dps,
  };
};
