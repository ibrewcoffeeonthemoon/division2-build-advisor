import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../utils";

type Store = {
  state: {
    showAlert: boolean;
  };
  action: {
    setShowAlert: (val: boolean) => void;
    toggleShowAlert: () => void;
  };
};

export const useStore = create<Store>()(
  immer((set) => ({
    state: {
      showAlert: false,
    },
    action: {
      setShowAlert: (val) =>
        set((s) => {
          s.state.showAlert = val;
        }),
      toggleShowAlert: () =>
        set((s) => {
          s.state.showAlert = !s.state.showAlert;
        }),
    },
  })),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
