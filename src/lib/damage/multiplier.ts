import { Items } from "../type";
import { AmplifierSums } from "./amplifier";

export const calCommonMultiplier = (
  amplifierSums: AmplifierSums[Items<"Weapons">],
): number => {
  const m = amplifierSums;

  const x =
    // 1 + Weapon Damage + Weapon Type Damage + Weapon Damage Talent
    (1 + (m.WDCore ?? 0) + (m.WDType ?? 0) + (m.WDTalent ?? 0)) *
    // 1 + Total Weapon Damage
    (1 + (m.TWD ?? 0)) *
    // 1 + Amplifier1
    (1 + (m.AMP1 ?? 0)) *
    // 1 + Amplifier2
    (1 + (m.AMP2 ?? 0)) *
    // 1 + Amplifier3
    (1 + (m.AMP3 ?? 0));

  return x;
};
