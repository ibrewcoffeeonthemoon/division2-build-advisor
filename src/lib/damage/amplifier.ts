import { State } from "@/store/data/state";
import { Amplifier, Attribute, Items } from "../type";

type AmplifierSums = Record<Items<"Weapons">, Record<Amplifier, number>>;

export const calAmplifierSums = (s: State["state"]): AmplifierSums => {
  const weaponItemAttrs = {
    Primary: [...s.Weapons.Primary.attributes],
    Secondary: [...s.Weapons.Secondary.attributes],
    Sidearm: [...s.Weapons.Sidearm.attributes],
    Signature: [...s.Weapons.Signature.attributes],
  } as Record<Items<"Weapons">, Attribute[]>;

  const otherItemAttrs = Object.values({
    ...s["Gears"],
    ...s["Extras"],
  }).flatMap((items) => Object.values(items.attributes));

  const attrs = Object.fromEntries(
    Object.entries(weaponItemAttrs).map(([key, attr]) => [
      key,
      [...attr, ...otherItemAttrs],
    ]),
  ) as Record<Items<"Weapons">, Attribute[]>;

  const reducer = (acc: Record<Amplifier, number>, attr: Attribute) => {
    const expValue = attr.value * attr.uptime;
    acc[attr.amplifier] = (acc[attr.amplifier] || 0) + expValue;
    return acc;
  };
  const result = Object.fromEntries(
    Object.entries(attrs).map(([weapon, attrs]) => [
      weapon,
      attrs.reduce(reducer, {} as Record<Amplifier, number>),
    ]),
  ) as AmplifierSums;

  return result;
};
