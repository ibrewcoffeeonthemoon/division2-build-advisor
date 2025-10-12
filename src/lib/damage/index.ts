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
  dmgRecord: DmgRecord<number>;
  dmgMultiplier: DmgRecord<number>;
  dpsRecord: DpsRecord<number>;
} => {
  const ampSums = calAmplifierSums(s, { uptime: true });
  const { dmgRecord, dmgMultiplier } = calDmg(item, s, ampSums);
  return {
    ampSums: ampSums[item],
    dmgRecord,
    dmgMultiplier,
    dpsRecord: calDps(item, s, ampSums),
  };
};
