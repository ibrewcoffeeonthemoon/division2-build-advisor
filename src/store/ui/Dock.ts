import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "../utils";

type Store = {
  state: {
    activeButton: number | null;
  };
  action: {
    setActiveButton: (val: number | null) => void;
  };
};

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      state: {
        activeButton: 0,
      },
      action: {
        setActiveButton: (val) =>
          set((s) => {
            s.state.activeButton = val;
          }),
      },
    })),
    {
      name: "store.ui.Dock",
      partialize: (s) => ({ state: s.state }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
