import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "@/store/utils";

type Store = {
  state: Record<
    string,
    {
      collapseOpen: boolean;
    }
  >;
  setCollapseOpen: (section: string, val: boolean) => void;
};

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      state: {},
      setCollapseOpen: (section, val) =>
        set((s) => {
          s.state[section] = s.state[section] || { collapseOpen: false };
          s.state[section].collapseOpen = val;
        }),
    })),
    {
      name: "store.ui.Main",
      partialize: (s) => ({ state: s.state }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
