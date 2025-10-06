import { State } from "@/store/data/state";
import { Amplifier, Attribute, Items } from "../type";
import { calAmplifierSums } from "./amplifier";

const accumulate = (s: State["state"], amp: Amplifier): number => {
  const itemStates = Object.values(s).flatMap((items) => Object.values(items));
  const attrs = itemStates.flatMap((item) => Object.values(item.attributes));
  const matchAttrs = attrs.filter((attr) => attr.amplifier === amp);
  const expValue = (attr: Attribute) => attr.value * attr.uptime;
  const valueSum = matchAttrs.reduce((sum, attr) => sum + expValue(attr), 0);
  return valueSum;
};

type Dmg = {
  normal: number | null;
};

const calDmg = (item: Items<"Weapons">, s: State["state"]): Dmg => {
  const weapon = s["Weapons"][item];
  const baseDamage = weapon.baseDamage!;
  const ampSums = calAmplifierSums(s);
  const m = ampSums[item];

  // prettier-ignore
  const multiplier = 
    // 1 + Weapon Damage + Weapon Type Damage + Weapon Damage Talent
    (1 + (m.WDCore || 0) + (m.WDType || 0) + (m.WDTalent || 0)) *
    // 1 + Total Weapon Damage
    (1 + ( m.TWD || 0 )) *
    // 1 + Amplifier1
    (1 + ( m.AMP1 || 0 )) *
    // 1 + Amplifier2
    (1 + ( m.AMP2 || 0 )) *
    // 1 + Amplifier3
    (1 + ( m.AMP3 || 0 )) *
    // 1 + Critical Hit Chance * Critical Hit Damage + Headshot Damage.
    // TODO factor them as separate path
    (1 + ( m.CHC || 0 ) * ( m.CHD || 0 ) + ( m.HS || 0 )) *
    // 1 + Damage to Armor + Damage to Health.
    // TODO they are mutually exclusive
    (1 + ( m.DTA_DTH || 0 )) *
    // 1 + Damage to Target out of Cover
    (1 + ( m.DTTOOC || 0 ));

  return {
    normal: baseDamage * multiplier,
  };
};

type Dps = {
  resultDmg: Dmg;
  dps: number | null;
};

const calDps = (item: Items<"Weapons">, s: State["state"]): Dps => {
  const weapon = s["Weapons"][item];
  const resultDmg = calDmg(item, s);
  const rpm = weapon.rpm;
  const dps = (resultDmg.normal! * rpm!) / 60;
  return { resultDmg, dps };
};

export type Damage = {
  dmg: number | null;
  dps: number | null;
};

export const damage = (item: Items<"Weapons">, s: State["state"]): Damage => {
  const resultDps = calDps(item, s);
  return {
    dmg: resultDps.resultDmg.normal,
    dps: resultDps.dps,
  };
};
