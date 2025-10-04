import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "@/store/utils";
import { State } from "./state";
import { Action } from "./action";

type Store = State & Action;

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
