import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "@/store/utils";
import { Categories } from "@/lib/type";

type Store = {
  collapseOpen: boolean;
  setCollapseOpen: (val: boolean) => void;
  name: Record<Categories.Weapons, string>;
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
        Primary: "",
        Secondary: "",
        Sidearm: "",
        Signature: "",
      },
    })),
    {
      name: "store.ui.Main.Weapons",
      partialize: (state) => ({ collapseOpen: state.collapseOpen }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
