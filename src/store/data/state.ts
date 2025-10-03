import { Attribute } from "@/lib/type";

type CategoryState = {
  name: string;
  attributes: Attribute[];
};

export type State = {
  state: Record<string, Record<string, CategoryState>>;
};

const init: () => CategoryState = () => ({ name: "", attributes: [] });
export const initState = () => ({
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
