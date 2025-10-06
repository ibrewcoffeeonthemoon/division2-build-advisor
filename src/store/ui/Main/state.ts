import { createItemRecords, createSectionRecords } from "@/store/record";

export type State = {
  state: {
    section: {
      open: Record<string, boolean>;
      item: {
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
    open: createSectionRecords(() => false),
    item: {
      open: createItemRecords(() => false),
      attributes: createItemRecords(() => ({ openedIndex: null })),
    },
  },
});
