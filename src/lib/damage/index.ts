import { State } from "@/store/data/state";
import { Items } from "../type";
import { AmplifierSums, calAmplifierSums } from "./amplifier";
import { calMultiplier } from "./multiplier";
import { createDamageRecord, DamageRecord } from "./record";

type Dmg = {
  amplifierSums: AmplifierSums[Items<"Weapons">];
  dmgRecord: DamageRecord<number>;
};

const calDmg = (item: Items<"Weapons">, s: State["state"]): Dmg => {
  const weapon = s.items["Weapons"][item];
  const baseDamage = weapon.baseDamage!;
  const amplifierSums = calAmplifierSums(s)[item];
  const multiplier = calMultiplier(amplifierSums);

  const dmgRecord = createDamageRecord(
    (n0, n1, n2, n3) => baseDamage * multiplier[n0][n1][n2][n3],
  );

  return { amplifierSums, dmgRecord };
};

type Dps = {
  dmgRecord: DamageRecord<number>;
  dpsRecord: DamageRecord<number>;
};

const calDps = (item: Items<"Weapons">, s: State["state"]): Dps => {
  const weapon = s.items["Weapons"][item];
  const { amplifierSums, dmgRecord } = calDmg(item, s);
  const rpm = weapon.rpm;
  const dpsRecord = createDamageRecord((n0, n1, n2, n3) => {
    const rps = (rpm || 0) / 60;
    const rof = 1 + (amplifierSums.ROF || 0);
    const dmg = dmgRecord[n0][n1][n2][n3];
    return dmg * rps * rof;
  });
  return { dmgRecord, dpsRecord };
};

export type Damage = Dps;

export const calDamage = (
  item: Items<"Weapons">,
  s: State["state"],
): Damage => {
  return calDps(item, s);
};
