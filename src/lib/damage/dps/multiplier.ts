import { Items } from "@/lib/type";
import { AmplifierSums } from "../amplifier";
import { createDpsRecord, DpsRecord } from "./record";
import { calCommonMultiplier } from "../multiplier";

type DpsMultiplier = DpsRecord<number>;

export const calDpsMultiplier = (
  amplifierSums: AmplifierSums[Items<"Weapons">],
) => {
  const m = amplifierSums;

  const x = calCommonMultiplier(m);

  const result = createDpsRecord((n1, n2, n3) => {
    //
    let y = 1;
    // 1 + Critical Hit Chanmce * Critical Hit Damage + Headshot Damage.
    y += (m.CHD ?? 0) * (m.CHC ?? 0);
    y += n1 === "headshot" ? (m.HS ?? 0) : 0;
    // 1 + Damage to Armor + Damage to Health.
    y *= n2 === "armor" ? 1 + (m.DTA ?? 0) : 1 + (m.DTH ?? 0);
    // 1 + Damage to Target out of Cover
    y *= n3 === "cover" ? 1 : 1 + (m.DTTOOC ?? 0);
    //
    return x * y;
  });

  return result as DpsMultiplier;
};
