import { State } from "@/store/edit/state";
import { Items } from "../type";
import { calAmplifierSums } from "./amplifier";
import { calDmg } from "./dmg";
import { calDps } from "./dps";
import { DmgRecord } from "./dmg/record";

export const calDamage = (
  item: Items<"Weapons">,
  s: State["state"],
): {
  dmgRecord: DmgRecord<number>;
  dpsRecord: DmgRecord<number>;
} => {
  const ampSums = calAmplifierSums(s, { uptime: true });
  return {
    dmgRecord: calDmg(item, s, ampSums),
    dpsRecord: calDps(item, s, ampSums),
  };
};
