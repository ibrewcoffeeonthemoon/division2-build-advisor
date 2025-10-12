import { Items } from "@/lib/type";
import { State } from "@/store/edit/state";
import { calDmgMultiplier } from "./multiplier";
import { createDmgRecord, DmgRecord } from "./record";
import { AmplifierSums } from "../amplifier";

export const calDmg = (
  item: Items<"Weapons">,
  s: State["state"],
  ampSums: AmplifierSums,
): {
  dmgValue: DmgRecord<number>;
  dmgMultiplier: DmgRecord<number>;
} => {
  const weapon = s.items["Weapons"][item];
  const baseDamage = weapon.baseDamage!;
  const dmgMultiplier = calDmgMultiplier(ampSums[item], { CHC: false });

  const dmgValue = createDmgRecord(
    (n0, n1, n2, n3) => baseDamage * dmgMultiplier[n0][n1][n2][n3],
  );

  return { dmgValue, dmgMultiplier };
};
