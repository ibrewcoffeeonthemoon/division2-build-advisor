import { StoreApi, UseBoundStore } from "zustand";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]); // eslint-disable-line @typescript-eslint/no-explicit-any
  }

  return store;
};

export const createSectionRecord = <T>(fn: () => T) => ({
  Weapons: fn(),
  Gears: fn(),
  Extras: fn(),
});

export const createCategoryRecord = <T>(fn: () => T) => ({
  Weapons: {
    Primary: fn(),
    Secondary: fn(),
    Sidearm: fn(),
    Signature: fn(),
  },
  Gears: {
    Mask: fn(),
    Backpack: fn(),
    Chest: fn(),
    Gloves: fn(),
    Holster: fn(),
    Kneepads: fn(),
  },
  Extras: {
    Watch: fn(),
    Specialization: fn(),
  },
});
