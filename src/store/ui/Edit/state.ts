export const SECTION_NAMES = ["Weapons", "Gears", "Extras"] as const;
export const TOPIC_NAMES = {
  Weapons: ["Primary", "Secondary", "Sidearm", "Signature"] as const,
  Gears: [
    "Mask",
    "Backpack",
    "Chest",
    "Gloves",
    "Holster",
    "Kneepads",
  ] as const,
  Extras: ["Basic", "Watch", "Specialization", "Season"] as const,
} as const;

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
      attributes: Object.fromEntries(
        SECTION_NAMES.map((sec) => [
          sec,
          Object.fromEntries(
            TOPIC_NAMES[sec].map((top) => [top, { openedIndex: null }]),
          ) as Record<string, { openedIndex: number | null }>,
        ]),
      ),
    },
  },
} as const;

export type State = {
  state: typeof STATE;
};

export const state: () => State["state"] = () => STATE;
