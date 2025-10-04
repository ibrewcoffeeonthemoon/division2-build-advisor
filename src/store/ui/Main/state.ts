import { createItemRecord, createSectionRecord } from "@/store/utils";

export type State = {
  state: {
    section: {
      open: Record<string, boolean>;
      category: {
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
    open: createSectionRecord(() => false),
    category: {
      open: createItemRecord(() => false),
      attributes: createItemRecord(() => ({ openedIndex: null })),
    },
  },
});
