import { Items } from "@/lib/type";
import { State } from "@/store/edit/state";
import { AmplifierSums } from "../amplifier";
import { DmgRecord, createDmgRecord } from "../dmg/record";
import { calDmg } from "../dmg";

export const calDps = (
  item: Items<"Weapons">,
  s: State["state"],
  ampSums: AmplifierSums,
): DmgRecord<number> => {
  const weapon = s.items["Weapons"][item];
  const dmgRecord = calDmg(item, s, ampSums);
  const rpm = weapon.rpm;
  const dpsRecord = createDmgRecord((n0, n1, n2, n3) => {
    const rps = (rpm ?? 0) / 60;
    const rof = 1 + (ampSums[item].ROF ?? 0);
    const dmg = dmgRecord[n0][n1][n2][n3];
    return dmg * rps * rof;
  });
  return dpsRecord;
};
