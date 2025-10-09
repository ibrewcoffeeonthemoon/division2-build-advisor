import { Items } from "@/lib/type";
import { AmplifierSums } from "../amplifier";
import { DmgRecord, createDmgRecord } from "./record";
import { calCommonMultiplier } from "../multiplier";

type DmgMultiplier = DmgRecord<number>;

export const calDmgMultiplier = (
  amplifierSums: AmplifierSums[Items<"Weapons">],
  { CHC }: { CHC: boolean },
) => {
  const m = amplifierSums;

  const x = calCommonMultiplier(m);

  const result = createDmgRecord((n0, n1, n2, n3) => {
    //
    let y = 1;
    // 1 + Critical Hit Chanmce * Critical Hit Damage + Headshot Damage.
    if (CHC) {
      y += n0 === "critical" ? (m.CHD ?? 0) * (m.CHC ?? 0) : 0;
    } else {
      y += n0 === "critical" ? (m.CHD ?? 0) : 0;
    }
    y += n1 === "headshot" ? (m.HS ?? 0) : 0;
    // 1 + Damage to Armor + Damage to Health.
    y *= n2 === "armor" ? 1 + (m.DTA ?? 0) : 1 + (m.DTH ?? 0);
    // 1 + Damage to Target out of Cover
    y *= n3 === "cover" ? 1 : 1 + (m.DTTOOC ?? 0);
    //
    return x * y;
  });

  return result as DmgMultiplier;
};
