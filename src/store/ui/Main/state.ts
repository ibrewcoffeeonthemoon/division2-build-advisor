import { createCategoryRecord, createSectionRecord } from "@/store/utils";

export type State = {
  state: {
    section: {
      collapseOpen: Record<string, boolean>;
      category: {
        collapseOpen: Record<string, Record<string, boolean>>;
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
    collapseOpen: createSectionRecord(() => false),
    category: {
      collapseOpen: createCategoryRecord(() => false),
      attributes: createCategoryRecord(() => ({ openedIndex: null })),
    },
  },
});
