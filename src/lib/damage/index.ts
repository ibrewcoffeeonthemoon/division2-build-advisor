import { State } from "@/store/edit/state";
import { Items } from "../type";
import { AmplifierSums, calAmplifierSums } from "./amplifier";
import { calDmg } from "./dmg";
import { calDps } from "./dps";
import { DmgRecord } from "./dmg/record";
import { DpsRecord } from "./dps/record";

export const calDamage = (
  item: Items<"Weapons">,
  s: State["state"],
): {
  ampSums: AmplifierSums[Items<"Weapons">];
  dmgValue: DmgRecord<number>;
  dmgMultiplier: DmgRecord<number>;
  dpsValue: DpsRecord<number>;
} => {
  const ampSums = calAmplifierSums(s, { uptime: true });
  const { dmgValue, dmgMultiplier } = calDmg(item, s, ampSums);
  return {
    ampSums: ampSums[item],
    dmgValue,
    dmgMultiplier,
    dpsValue: calDps(item, s, ampSums),
  };
};
