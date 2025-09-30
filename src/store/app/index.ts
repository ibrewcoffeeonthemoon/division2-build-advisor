import { create } from "zustand";

type Store = {
  currentUrl: string;
  setCurrentUrl: (val: string) => void;
  dark: boolean;
  setDark: (val: boolean) => void;
  toggleDark: () => void;
};
export const useStore = create<Store>()((set) => ({
  currentUrl: "",
  setCurrentUrl: (val) => set(() => ({ currentUrl: val })),
  dark: true,
  setDark: (val) => set(() => ({ dark: val })),
  toggleDark: () => set((s) => ({ dark: !s.dark })),
}));
