import { CATEGORY_NAMES, ITEM_NAMES } from "@/lib/constant";

const SECTION_NAMES = CATEGORY_NAMES;
const TOPIC_NAMES = ITEM_NAMES;

export type SectionName = (typeof SECTION_NAMES)[number];
export type TopicName<T extends SectionName> = (typeof TOPIC_NAMES)[T][number];

export const STATE = {
  section: {
    open: Object.fromEntries(SECTION_NAMES.map((sec) => [sec, false])),
    topic: {
      open: Object.fromEntries(
        SECTION_NAMES.map((sec) => [
          sec,
          Object.fromEntries(TOPIC_NAMES[sec].map((top) => [top, false])),
        ]),
      ),
      paragraph: {
        openedIndex: Object.fromEntries(
          SECTION_NAMES.map((sec) => [
            sec,
            Object.fromEntries(
              TOPIC_NAMES[sec].map((top) => [top, null]),
            ) as Record<string, number | null>,
          ]),
        ),
      },
    },
  },
} as const;

export type State = {
  state: typeof STATE;
};

export const state: () => State["state"] = () => STATE;
