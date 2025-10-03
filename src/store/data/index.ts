import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "../utils";
import { initState, State } from "./state";
import { Action } from "./action";

type Store = State & Action;

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      state: initState(),
      setName: (sec, cat, val) =>
        set((s) => {
          s.state[sec][cat].name = val;
        }),
      appendAttribute: (sec, cat, attr) =>
        set((s) => {
          s.state[sec][cat].attributes.push(attr);
        }),
      removeAttribute: (sec, cat, index) =>
        set((s) => {
          s.state[sec][cat].attributes = s.state[sec][cat].attributes.filter(
            (_, i) => i !== index,
          );
        }),
      changeAttributeType: (sec, cat, index, val) =>
        set((s) => {
          s.state[sec][cat].attributes[index].type = val;
        }),
      changeAttributeName: (sec, cat, index, val) =>
        set((s) => {
          s.state[sec][cat].attributes[index].name = val;
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
