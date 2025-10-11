import { builds } from "@/lib/presets/builds";
import { Build } from "@/lib/type";

export type State = {
  state: {
    builds: Build[];
  };
};

export const state: () => State["state"] = () => {
  return {
    builds: [builds.LexingtonStriker, builds.BluescreenTippingScales],
  };
};
