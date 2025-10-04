import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "@/store/utils";
import Sections from "@/lib/type/sections";

type Store = {
  state: {
    section: {
      collapseOpen: Record<Sections, boolean>;
      category: {
        collapseOpen: Record<Sections, Record<string, boolean>>;
        attributes: {
          openedIndex?: number;
        };
      };
    };
  };
  setCollapseOpen: (section: Sections, val: boolean) => void;
  setOpenedIndex: (
    section: Sections,
    category: string,
    val: number | null,
  ) => void;
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
      setOpenedIndex: (section, category, val) =>
        set((s) => {
          s.state[section][category].openedIndex = val;
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
