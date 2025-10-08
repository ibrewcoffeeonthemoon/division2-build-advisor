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
      setName: (sec, item, val) =>
        set((s) => {
          s.state.items[sec][item].name = val;
        }),
      setBaseDamage: (sec, item, val) =>
        set((s) => {
          s.state.items[sec][item].baseDamage = val;
        }),
      setRpm: (sec, item, val) =>
        set((s) => {
          s.state.items[sec][item].rpm = val;
        }),
      setWeaponType: (sec, item, val) =>
        set((s) => {
          s.state.items[sec][item].weaponType = val;
        }),
      appendAttribute: (sec, item, attr) =>
        set((s) => {
          s.state.items[sec][item].attributes.push(attr);
        }),
      removeAttribute: (sec, item, index) =>
        set((s) => {
          s.state.items[sec][item].attributes = s.state.items[sec][
            item
          ].attributes.filter((_, i) => i !== index);
        }),
      changeAttributeName: (sec, item, index, val) =>
        set((s) => {
          s.state.items[sec][item].attributes[index].name = val;
        }),
      changeAttributeAmplifier: (sec, item, index, val) =>
        set((s) => {
          s.state.items[sec][item].attributes[index].amplifier = val;
        }),
      changeAttributeValue: (sec, item, index, val) =>
        set((s) => {
          s.state.items[sec][item].attributes[index].value = val;
        }),
      changeAttributeUptime: (sec, item, index, val) =>
        set((s) => {
          s.state.items[sec][item].attributes[index].uptime = val;
        }),
      changeAttributeType: (sec, item, index, val) =>
        set((s) => {
          s.state.items[sec][item].attributes[index].type = val;
        }),
      changeAttributeNote: (sec, item, index, val) =>
        set((s) => {
          s.state.items[sec][item].attributes[index].note = val;
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
