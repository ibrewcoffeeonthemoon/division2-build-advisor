import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "@/store/utils";

type Store = {
  collapseOpen: boolean;
  setCollapseOpen: (val: boolean) => void;
};

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      collapseOpen: true,
      setCollapseOpen: (val) =>
        set((s) => {
          s.collapseOpen = val;
        }),
    })),
    {
      name: "store.ui.Main.Extras",
      partialize: (state) => ({ collapseOpen: state.collapseOpen }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
