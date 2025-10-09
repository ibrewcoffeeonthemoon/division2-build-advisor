import { State } from "@/store/edit/state";
import { Items } from "../type";
import { AmplifierSums, calAmplifierSums } from "./amplifier";
import { calMultiplier } from "./multiplier";
import { createDamageRecord, DamageRecord } from "./record";

const calDmg = (
  item: Items<"Weapons">,
  s: State["state"],
  ampSums: AmplifierSums,
): DamageRecord<number> => {
  const weapon = s.items["Weapons"][item];
  const baseDamage = weapon.baseDamage!;
  const multiplier = calMultiplier(ampSums[item], { CHC: false });

  const dmgRecord = createDamageRecord(
    (n0, n1, n2, n3) => baseDamage * multiplier[n0][n1][n2][n3],
  );

  return dmgRecord;
};

const calDps = (
  item: Items<"Weapons">,
  s: State["state"],
  ampSums: AmplifierSums,
): DamageRecord<number> => {
  const weapon = s.items["Weapons"][item];
  const dmgRecord = calDmg(item, s, ampSums);
  const rpm = weapon.rpm;
  const dpsRecord = createDamageRecord((n0, n1, n2, n3) => {
    const rps = (rpm ?? 0) / 60;
    const rof = 1 + (ampSums[item].ROF ?? 0);
    const dmg = dmgRecord[n0][n1][n2][n3];
    return dmg * rps * rof;
  });
  return dpsRecord;
};

export const calDamage = (
  item: Items<"Weapons">,
  s: State["state"],
): {
  dmgRecord: DamageRecord<number>;
  dpsRecord: DamageRecord<number>;
} => {
  const ampSums = calAmplifierSums(s, { uptime: true });
  return {
    dmgRecord: calDmg(item, s, ampSums),
    dpsRecord: calDps(item, s, ampSums),
  };
};
