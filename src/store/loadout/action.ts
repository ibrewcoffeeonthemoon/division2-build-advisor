import { Build } from "@/lib/type";

export type Action = {
  saveLoadout: (build: Build) => void;
  removeLoadout: (i: number) => void;
};
