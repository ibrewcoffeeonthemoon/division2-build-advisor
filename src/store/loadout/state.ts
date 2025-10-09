import { DEFAULT_BUILD } from "@/lib/default";
import { Build } from "@/lib/type";

export type State = {
  state: {
    builds: Build[];
  };
};

export const state: () => State["state"] = () => {
  return {
    builds: [DEFAULT_BUILD],
  };
};
