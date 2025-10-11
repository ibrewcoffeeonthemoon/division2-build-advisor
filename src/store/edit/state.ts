import { WeaponType } from "@/lib/type/weapon";

import { CATEGORY_NAMES, ITEM_NAMES } from "@/lib/constant";
import { Item } from "@/lib/type";

const SECTION_NAMES = CATEGORY_NAMES;
const TOPIC_NAMES = ITEM_NAMES;

export type SectionName = (typeof SECTION_NAMES)[number];
export type TopicName<T extends SectionName> = (typeof TOPIC_NAMES)[T][number];

export const STATE = {
  name: "Default",
  items: Object.fromEntries(
    SECTION_NAMES.map((sec) => [
      sec,
      Object.fromEntries(
        TOPIC_NAMES[sec].map((top) => {
          const inWeapons = sec === "Weapons";
          return [
            top,
            {
              name: "",
              baseDamage: inWeapons ? 0 : null,
              rpm: inWeapons ? 0 : null,
              weaponType: inWeapons ? ("AR" as WeaponType) : null,
              attributes: [],
            },
          ];
        }),
      ),
    ]),
  ) as Record<string, Record<string, Item>>,
};

export type State = {
  state: typeof STATE;
};

export const state: () => State["state"] = () => STATE;
