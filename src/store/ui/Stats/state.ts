import { ITEM_NAMES } from "@/lib/constant";
import { fromEntries } from "@/lib/utils";

export const SECTION_NAMES = ["Basic", "Damage", "Dps"] as const;
export const TOPIC_NAMES = ITEM_NAMES.Weapons;

export type SectionName = (typeof SECTION_NAMES)[number];
export type TopicName = (typeof TOPIC_NAMES)[number];

export const STATE = {
  section: {
    open: fromEntries(SECTION_NAMES.map((sec) => [sec, false])),
    topic: {
      open: fromEntries(
        SECTION_NAMES.map((sec) => [
          sec,
          fromEntries(TOPIC_NAMES.map((top) => [top, false])),
        ]),
      ),
    },
  },
} as const;

export type State = {
  state: typeof STATE;
};

export const state: () => State["state"] = () => STATE;
