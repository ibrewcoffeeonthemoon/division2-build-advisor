import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "@/store/utils";
import Sections from "@/lib/type/sections";

type SectionState = { collapseOpen: boolean };
type Store = {
  state: {
    Weapons: SectionState;
    Gears: SectionState;
    Extras: SectionState;
  };
  setCollapseOpen: (section: Sections, val: boolean) => void;
};

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      state: {
        Weapons: { collapseOpen: false },
        Gears: { collapseOpen: false },
        Extras: { collapseOpen: false },
      },
      setCollapseOpen: (section, val) =>
        set((s) => {
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
