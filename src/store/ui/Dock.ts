import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "../utils";

type Store = {
  activeButton: number;
  setActiveButton: (val: number) => void;
};

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      activeButton: 0,
      setActiveButton: (val) =>
        set((s) => {
          s.activeButton = val;
        }),
    })),
    {
      name: "store.ui.Dock",
      partialize: (state) => ({ activeButton: state.activeButton }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export default useStoreSelectors.use;
