import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../utils";

type Store = {
  showAlert: boolean;
  setShowAlert: (val: boolean) => void;
  toggleShowAlert: () => void;
};

export const useStore = create<Store>()(
  immer((set) => ({
    showAlert: false,
    setShowAlert: (val) =>
      set((s) => {
        s.showAlert = val;
      }),
    toggleShowAlert: () =>
      set((s) => {
        s.showAlert = !s.showAlert;
      }),
  })),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
