import { createItemRecord, createSectionRecord } from "@/store/utils";

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
    open: createSectionRecord(() => false),
    item: {
      open: createItemRecord(() => false),
      attributes: createItemRecord(() => ({ openedIndex: null })),
    },
  },
});
