import { Items } from "@/lib/type";
import { State } from "@/store/edit/state";
import { calMultiplier } from "./multiplier";
import { createDmgRecord, DmgRecord } from "./record";
import { AmplifierSums } from "../amplifier";

export const calDmg = (
  item: Items<"Weapons">,
  s: State["state"],
  ampSums: AmplifierSums,
): DmgRecord<number> => {
  const weapon = s.items["Weapons"][item];
  const baseDamage = weapon.baseDamage!;
  const multiplier = calMultiplier(ampSums[item], { CHC: false });

  const dmgRecord = createDmgRecord(
    (n0, n1, n2, n3) => baseDamage * multiplier[n0][n1][n2][n3],
  );

  return dmgRecord;
};
