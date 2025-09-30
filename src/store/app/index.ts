import { create } from "zustand";
import { createSelectors } from "../utils";
import { persist } from "zustand/middleware";

type Store = {
  currentUrl: string;
  setCurrentUrl: (val: string) => void;
  dark: boolean;
  setDark: (val: boolean) => void;
  toggleDark: () => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      currentUrl: "",
      setCurrentUrl: (val) => set(() => ({ currentUrl: val })),
      dark: true,
      setDark: (val) => set(() => ({ dark: val })),
      toggleDark: () => set((s) => ({ dark: !s.dark })),
    }),
    {
      name: "store.app",
      partialize: (state) => ({ dark: state.dark }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export default useStoreSelectors.use;
