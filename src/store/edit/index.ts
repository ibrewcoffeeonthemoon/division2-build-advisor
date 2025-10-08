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
      action: {
        build: {
          setBuild: (val) =>
            set((s) => {
              s.state = val;
            }),
          setName: (val) =>
            set((s) => {
              s.state.name = val;
            }),
        },
        item: {
          setName: (cat, item, val) =>
            set((s) => {
              s.state.items[cat][item].name = val;
            }),
          setBaseDamage: (cat, item, val) =>
            set((s) => {
              s.state.items[cat][item].baseDamage = val;
            }),
          setRpm: (cat, item, val) =>
            set((s) => {
              s.state.items[cat][item].rpm = val;
            }),
          setWeaponType: (cat, item, val) =>
            set((s) => {
              s.state.items[cat][item].weaponType = val;
            }),
        },
        attribute: {
          append: (cat, item, attr) =>
            set((s) => {
              s.state.items[cat][item].attributes.push(attr);
            }),
          remove: (cat, item, index) =>
            set((s) => {
              s.state.items[cat][item].attributes = s.state.items[cat][
                item
              ].attributes.filter((_, i) => i !== index);
            }),
          setName: (cat, item, index, val) =>
            set((s) => {
              s.state.items[cat][item].attributes[index].name = val;
            }),
          setAmplifier: (cat, item, index, val) =>
            set((s) => {
              s.state.items[cat][item].attributes[index].amplifier = val;
            }),
          changeAttributeValue: (cat, item, index, val) =>
            set((s) => {
              s.state.items[cat][item].attributes[index].value = val;
            }),
          changeAttributeUptime: (cat, item, index, val) =>
            set((s) => {
              s.state.items[cat][item].attributes[index].uptime = val;
            }),
          changeAttributeType: (cat, item, index, val) =>
            set((s) => {
              s.state.items[cat][item].attributes[index].type = val;
            }),
          changeAttributeNote: (cat, item, index, val) =>
            set((s) => {
              s.state.items[cat][item].attributes[index].note = val;
            }),
        },
      },
    })),
    {
      name: "store.edit",
      partialize: (s) => ({
        state: s.state,
      }),
    },
  ),
);

export const useStoreSelectors = createSelectors(useStore);

export const store = useStoreSelectors.use;
