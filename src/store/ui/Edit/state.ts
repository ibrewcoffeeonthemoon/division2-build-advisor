import { createItemRecords, createCategoryRecords } from "@/store/record";

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
