import { create } from "zustand";

type Store = {
  currentUrl: string;
  setCurrentUrl: (val: string) => void;
};
export const useStore = create<Store>()((set) => ({
  currentUrl: "",
  setCurrentUrl: (val) => set(() => ({ currentUrl: val })),
}));
