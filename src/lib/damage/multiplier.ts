import { Items } from "../type";
import { AmplifierSums } from "./amplifier";

// prettier-ignore
export type Multiplier = 
  Record<"normal" | "critical", 
    Record<"headshot" | "bodyshot", 
      Record<"health" | "armor", 
        Record<"cover"| "nocover", number>>>
>;

export const calMultiplier = (
  amplifierSums: AmplifierSums[Items<"Weapons">],
) => {
  const m = amplifierSums;

  const x =
    // 1 + Weapon Damage + Weapon Type Damage + Weapon Damage Talent
    (1 + (m.WDCore || 0) + (m.WDType || 0) + (m.WDTalent || 0)) *
    // 1 + Total Weapon Damage
    (1 + (m.TWD || 0)) *
    // 1 + Amplifier1
    (1 + (m.AMP1 || 0)) *
    // 1 + Amplifier2
    (1 + (m.AMP2 || 0)) *
    // 1 + Amplifier3
    (1 + (m.AMP3 || 0));

  const result: Record<
    string,
    Record<string, Record<string, Record<string, number>>>
  > = {};

  ["normal", "critical"].forEach((n0) => {
    result[n0] = {};
    ["headshot", "bodyshot"].forEach((n1) => {
      result[n0][n1] = {};
      ["armor", "health"].forEach((n2) => {
        result[n0][n1][n2] = {};
        ["cover", "nocover"].forEach((n3) => {
          result[n0][n1][n2][n3] = x;
          //
          let y = 1;
          // 1 + Critical Hit Chanmce * Critical Hit Damage + Headshot Damage.
          y += n0 === "critical" ? (m.CHC || 0) + (m.CHD || 0) : 0;
          y += n1 === "headshot" ? m.HS || 0 : 0;
          // 1 + Damage to Armor + Damage to Health.
          y *= n2 === "armor" ? 1 + (m.DTA || 0) : 1 + (m.DTH || 0);
          // 1 + Damage to Target out of Cover
          y *= n3 === "cover" ? 1 : 1 + (m.DTTOOC || 0);
          //
          result[n0][n1][n2][n3] *= y;
        });
      });
    });
  });

  return result as Multiplier;
};
