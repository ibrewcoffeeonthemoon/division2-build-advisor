import { State } from "@/store/data/state";
import { Items } from "../type";
import { AmplifierSums, calAmplifierSums } from "./amplifier";
import { calMultiplier } from "./multiplier";
import { createDamageRecord, DamageRecord } from "./record";

type Dmg = {
  amp: AmplifierSums[Items<"Weapons">];
  dmg: DamageRecord<number>;
};

const calDmg = (item: Items<"Weapons">, s: State["state"]): Dmg => {
  const weapon = s["Weapons"][item];
  const baseDamage = weapon.baseDamage!;
  const amplifierSum = calAmplifierSums(s)[item];
  const multiplier = calMultiplier(amplifierSum);

  const dmg = createDamageRecord(
    (n0, n1, n2, n3) => baseDamage * multiplier[n0][n1][n2][n3],
  );

  return { amp: amplifierSum, dmg };
};

type Dps = {
  dmg: DamageRecord<number>;
  dps: DamageRecord<number>;
};

const calDps = (item: Items<"Weapons">, s: State["state"]): Dps => {
  const weapon = s["Weapons"][item];
  const { amp: amp_, dmg: dmg_ } = calDmg(item, s);
  const rpm = weapon.rpm;
  const dps = createDamageRecord((n0, n1, n2, n3) => {
    const rps = (rpm || 0) / 60;
    const rof = 1 + (amp_.ROF || 0);
    const dmg = dmg_[n0][n1][n2][n3];
    return dmg * rps * rof;
  });
  return { dmg: dmg_, dps: dps };
};

export type Damage = Dps;

export const calDamage = (
  item: Items<"Weapons">,
  s: State["state"],
): Damage => {
  return calDps(item, s);
};
