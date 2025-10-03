import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "./utils";
import { persist } from "zustand/middleware";

type Store = {
  currentUrl: string;
  setCurrentUrl: (val: string) => void;
  theme: string;
  setTheme: (val: string) => void;
};

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      currentUrl: "",
      setCurrentUrl: (val) =>
        set((s) => {
          s.currentUrl = val;
        }),
      theme: "light",
      setTheme: (val) =>
        set((s) => {
          s.theme = val;
        }),
    })),
    {
      name: "store.app",
      partialize: (s) => ({
        theme: s.theme,
      }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
