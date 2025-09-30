import { create } from "zustand";
import { createSelectors } from "../utils";

type Store = {
  showAlert: boolean;
  setShowAlert: (val: boolean) => void;
  toggleShowAlert: () => void;
};

export const useStore = create<Store>()((set) => ({
  showAlert: false,
  setShowAlert: (val) => set(() => ({ showAlert: val })),
  toggleShowAlert: () => set((s) => ({ showAlert: !s.showAlert })),
}));

export const useStoreSelectors = createSelectors(useStore);

export default useStoreSelectors.use;
