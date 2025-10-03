import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "@/store/utils";
import Sections from "@/lib/type/sections";

type Store = {
  state: {
    Weapons: {
      collapseOpen: boolean;
      Primary: { openedIndex?: number };
      Secondary: { openedIndex?: number };
      Sidearm: { openedIndex?: number };
      Signature: { openedIndex?: number };
    };
    Gears: {
      collapseOpen: boolean;
      Mask: { openedIndex?: number };
      Backpack: { openedIndex?: number };
      Chest: { openedIndex?: number };
      Gloves: { openedIndex?: number };
      Holster: { openedIndex?: number };
      Kneepads: { openedIndex?: number };
    };
    Extras: {
      collapseOpen: boolean;
      Watch: { openedIndex?: number };
      Specialization: { openedIndex?: number };
    };
  };
  setCollapseOpen: (section: Sections, val: boolean) => void;
};

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      state: {
        Weapons: {
          collapseOpen: false,
          Primary: {},
          Secondary: {},
          Sidearm: {},
          Signature: {},
        },
        Gears: {
          collapseOpen: false,
          Mask: {},
          Backpack: {},
          Chest: {},
          Gloves: {},
          Holster: {},
          Kneepads: {},
        },
        Extras: {
          collapseOpen: false,
          Watch: {},
          Specialization: {},
        },
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
