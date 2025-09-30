import { create } from "zustand";
import { createSelectors } from "../utils";

type Store = {
  currentUrl: string;
  setCurrentUrl: (val: string) => void;
  dark: boolean;
  setDark: (val: boolean) => void;
  toggleDark: () => void;
};

export const useStore = create<Store>()((set) => ({
  currentUrl: "",
  setCurrentUrl: (val) => set(() => ({ currentUrl: val })),
  dark: true,
  setDark: (val) => set(() => ({ dark: val })),
  toggleDark: () => set((s) => ({ dark: !s.dark })),
}));

export const useStoreSelectors = createSelectors(useStore);

export default useStoreSelectors.use;
