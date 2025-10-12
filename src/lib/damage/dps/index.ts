import { Items } from "@/lib/type";
import { State } from "@/store/edit/state";
import { AmplifierSums } from "../amplifier";
import { createDpsRecord, DpsRecord } from "./record";
import { calDpsMultiplier } from "./multiplier";

export const calDps = (
  item: Items<"Weapons">,
  s: State["state"],
  ampSums: AmplifierSums,
): {
  dpsValue: DpsRecord<number>;
  dpsMultiplier: DpsRecord<number>;
} => {
  const weapon = s.items["Weapons"][item];
  const baseDamage = weapon.baseDamage!;
  const rpm = weapon.rpm;
  const dpsMultiplier = calDpsMultiplier(ampSums[item]);

  const dpsValue = createDpsRecord((n1, n2, n3) => {
    const rps = (rpm ?? 0) / 60;
    const rof = 1 + (ampSums[item].ROF ?? 0);
    const dmg = baseDamage * dpsMultiplier[n1][n2][n3];
    return dmg * rps * rof;
  });
  return { dpsValue, dpsMultiplier };
};
