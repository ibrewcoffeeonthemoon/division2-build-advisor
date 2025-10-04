import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "@/store/utils";
import { state, State } from "./state";
import { Action } from "./action";

type Store = State & Action;

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      state: state(),
      setCollapseOpen: (sec, val) =>
        set((s) => {
          s.state.section.collapseOpen[sec] = val;
        }),
      setCategoryOpen: (sec, cat, val) =>
        set((s) => {
          s.state.section.category.collapseOpen[sec][cat] = val;
        }),
      setOpenedIndex: (sec, cat, val) =>
        set((s) => {
          s.state.section.category.attributes[sec][cat].openedIndex = val;
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
