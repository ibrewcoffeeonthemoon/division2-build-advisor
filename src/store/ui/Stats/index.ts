import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "@/store/utils";
import { state, State } from "./state";
import { Action } from "./action";

type Store = State & Action;

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      state: state(),
      action: {
        setSectionOpen: (sec, val) =>
          set((s) => {
            s.state.section.open[sec] = val;
          }),
        setTopicOpen: (sec, tp, val) =>
          set((s) => {
            s.state.section.topic.open[sec][tp] = val;
          }),
        setParagraphOpen: (sec, tp, val) =>
          set((s) => {
            s.state.section.topic.paragraph.open[sec][tp] = val;
          }),
      },
    })),
    {
      name: "store.ui.Stats",
      partialize: (s) => ({ state: s.state }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
