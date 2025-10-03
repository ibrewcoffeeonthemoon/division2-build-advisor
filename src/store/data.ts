import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "./utils";

type Store = {
  state: Record<
    string,
    Record<
      string,
      {
        name: string;
      }
    >
  >;
  setName: (section: string, category: string, val: string) => void;
};

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      state: {},
      setName: (section, category, val) =>
        set((s) => {
          s.state[section] = s.state[section] || {};
          s.state[section][category] = s.state[section][category] || {
            name: "",
          };
          s.state[section][category].name = val;
        }),
    })),
    {
      name: "store.data",
      partialize: (s) => ({
        state: s.state,
      }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
