import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "./utils";
import { Attribute } from "@/lib/type";

type CategoryState = {
  name: string;
  attributes: Attribute[];
};
type Store = {
  state: Record<string, Record<string, CategoryState>>;
  setName: (sec: string, cat: string, val: string) => void;
  appendAttribute: (sec: string, cat: string, attr: Attribute) => void;
  removeAttribute: (sec: string, cat: string, index: number) => void;
};

const init: () => CategoryState = () => ({ name: "", attributes: [] });
const initState = () => ({
  Weapons: {
    Primary: init(),
    Secondary: init(),
    Sidearm: init(),
    Signature: init(),
  },
  Gears: {
    Mask: init(),
    Backpack: init(),
    Chest: init(),
    Gloves: init(),
    Holster: init(),
    Kneepads: init(),
  },
  Extras: {
    Watch: init(),
    Specialization: init(),
  },
});

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
