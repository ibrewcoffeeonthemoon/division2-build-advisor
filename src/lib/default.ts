import { RedCore } from "./presets";
import * as p from "./presets/helper";
import { Build } from "./type";

export const DEFAULT_BUILD: Build = {
  name: "6 Red Lexington Build",
  items: {
    Weapons: {
      Primary: {
        name: "Lexington",
        baseDamage: 48_700,
        rpm: 850,
        attributes: [RedCore()],
      },
      Secondary: { name: "", attributes: [] },
      Sidearm: { name: "", attributes: [] },
      Signature: { name: "", attributes: [] },
    },
    Gears: {
      Mask: { name: "", attributes: [RedCore()] },
      Backpack: { name: "", attributes: [RedCore()] },
      Chest: { name: "", attributes: [RedCore()] },
      Gloves: { name: "", attributes: [RedCore()] },
      Holster: { name: "", attributes: [RedCore()] },
      Kneepads: { name: "", attributes: [RedCore()] },
    },
    Extras: {
      Watch: {
        name: "Keener's Watch",
        attributes: [p.WD(0.1), p.CHC(0.1), p.CHD(0.2), p.HS(0.2)],
      },
      Specialization: { name: "", attributes: [] },
    },
  },
};
