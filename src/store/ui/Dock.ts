import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../utils";

type Store = {
  activeButton: number;
  setActiveButton: (val: number) => void;
};

export const useStore = create<Store>()(
  immer((set) => ({
    activeButton: 0,
    setActiveButton: (val) =>
      set((s) => {
        s.activeButton = val;
      }),
  })),
);

export const useStoreSelectors = createSelectors(useStore);

export default useStoreSelectors.use;
