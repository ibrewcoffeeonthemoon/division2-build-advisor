import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "../utils";
import { state, State } from "./state";
import { Action } from "./action";

type Store = State & Action;

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      state: state(),
    })),
    {
      name: "store.loadout",
      partialize: (s) => ({
        state: s.state,
      }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
