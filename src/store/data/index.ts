import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "../utils";

type Store = {
  data: Record<
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
      data: {},
      setName: (section, category, val) =>
        set((s) => {
          s.data[section] = s.data[section] || {};
          s.data[section][category] = s.data[section][category] || { name: "" };
          s.data[section][category].name = val;
        }),
    })),
    {
      name: "store.data",
      partialize: (state) => ({
        data: state.data,
      }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
