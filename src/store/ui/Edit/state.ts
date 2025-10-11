import { createItemRecords, createCategoryRecords } from "@/store/record";

export const SECTION_NAMES = ["Weapons", "Gears", "Extras"] as const;
export const TOPIC_NAMES = {
  Weapons: ["Primary", "Secondary", "Sidearm", "Signature"],
  Gears: ["Mask", "Backpack", "Chest", "Gloves", "Holster", "Kneepads"],
  Extras: ["Basic", "Watch", "Specialization", "Season"],
} as const;

export type SectionName = (typeof SECTION_NAMES)[number];
export type TopicName<T extends SectionName> = (typeof TOPIC_NAMES)[T][number];

export type State = {
  state: {
    section: {
      open: Record<string, boolean>;
      topic: {
        open: Record<string, Record<string, boolean>>;
        attributes: Record<
          string,
          Record<string, { openedIndex: number | null }>
        >;
      };
    };
  };
};

export const state: () => State["state"] = () => ({
  section: {
    open: createCategoryRecords(() => false),
    topic: {
      open: createItemRecords(() => false),
      attributes: createItemRecords(() => ({ openedIndex: null })),
    },
  },
});
