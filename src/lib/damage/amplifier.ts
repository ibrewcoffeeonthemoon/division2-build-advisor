import { State } from "@/store/edit/state";
import { Items } from "../type";
import { WEAPON_TYPES_WDTYPE_MAP } from "../constant/weapon";
import { Amplifier } from "../type/amplifier";
import { Attribute } from "../type/attribute";

export type AmplifierSums = Record<Items<"Weapons">, Record<Amplifier, number>>;

export const calAmplifierSums = (s: State["state"]): AmplifierSums => {
  // extract weapon item attrs into their own records
  const weaponItemAttrs = {
    Primary: [...s.items.Weapons.Primary.attributes],
    Secondary: [...s.items.Weapons.Secondary.attributes],
    Sidearm: [...s.items.Weapons.Sidearm.attributes],
    Signature: [...s.items.Weapons.Signature.attributes],
  } as Record<Items<"Weapons">, Attribute[]>;

  // extract other item attrs into a shared records
  const otherItemAttrs = Object.values({
    ...s.items["Gears"],
    ...s.items["Extras"],
  }).flatMap((items) => Object.values(items.attributes));

  // combine to form a relevent record for each weapon
  const attrs = Object.fromEntries(
    Object.entries(weaponItemAttrs).map(([key, attr]) => [
      key,
      [...attr, ...otherItemAttrs],
    ]),
  ) as Record<Items<"Weapons">, Attribute[]>;

  // filter non-relevent record such as mismatch WDType
  const filteredAttrs = Object.fromEntries(
    Object.entries(attrs).map(([weapon, attrs]) => [
      weapon,
      attrs.filter((a) => {
        // filter on all WDType Attribute
        if (a.amplifier === "WDType") {
          const currentWeaponType = s.items.Weapons[weapon].weaponType!;
          const matchingWDTypeName = WEAPON_TYPES_WDTYPE_MAP[currentWeaponType];
          const wdTypeName = a.name;
          // only allow matching WDType name to stay
          return matchingWDTypeName === wdTypeName;
        }
        // allow everything else
        return true;
      }),
    ]),
  ) as Record<Items<"Weapons">, Attribute[]>;

  // reduce the array into single quantity for each amplifier type
  const reducer = (acc: Record<Amplifier, number>, attr: Attribute) => {
    const expValue = (attr.value || 0) * (attr.uptime || 0);
    acc[attr.amplifier] = (acc[attr.amplifier] || 0) + expValue;
    return acc;
  };
  const result = Object.fromEntries(
    Object.entries(filteredAttrs).map(([weapon, attrs]) => [
      weapon,
      attrs.reduce(reducer, {} as Record<Amplifier, number>),
    ]),
  ) as AmplifierSums;

  // return as AmplifierSums
  return result;
};
