import { Build } from "@/lib/type";

export type Action = {
  action: {
    saveLoadout: (build: Build) => void;
    removeLoadout: (i: number) => void;
  };
};
