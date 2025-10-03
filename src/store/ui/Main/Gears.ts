import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "@/store/utils";
import * as Categories from "@/lib/type/categories";

type Store = {
  collapseOpen: boolean;
  setCollapseOpen: (val: boolean) => void;
  name: Record<Categories.Gears, string>;
  setName: (category: Categories.Gears, val: string) => void;
};

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      collapseOpen: true,
      setCollapseOpen: (val) =>
        set((s) => {
          s.collapseOpen = val;
        }),
      name: {
        Mask: "",
        Backpack: "",
        Chest: "",
        Gloves: "",
        Holster: "",
        Kneepads: "",
      },
      setName: (category, val) =>
        set((s) => {
          s.name[category] = val;
        }),
    })),
    {
      name: "store.ui.Main.Gears",
      partialize: (state) => ({ collapseOpen: state.collapseOpen }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
