export const SECTION_NAMES = ["Basic", "Damage", "Dps"] as const;
export const TOPIC_NAMES = [
  "Primary",
  "Secondary",
  "Sidearm",
  "Signature",
] as const;

export type SectionName = (typeof SECTION_NAMES)[number];
export type TopicName = (typeof TOPIC_NAMES)[number];

type SectionRecord = {
  [S in SectionName]: boolean;
};
type TopicRecord = {
  [S in SectionName]: {
    [T in TopicName]: boolean;
  };
};

export const STATE = {
  section: {
    open: Object.fromEntries(
      SECTION_NAMES.map((sec) => [sec, false]),
    ) as SectionRecord,
    topic: {
      open: Object.fromEntries(
        SECTION_NAMES.map((sec) => [
          sec,
          Object.fromEntries(TOPIC_NAMES.map((top) => [top, false])),
        ]),
      ) as TopicRecord,
    },
  },
} as const;

export type State = {
  state: typeof STATE;
};

export const state: () => State["state"] = () => STATE;
