import { KeenersWatchRed, RedCore } from "./presets";
import * as p from "./presets/helper";
import { Build } from "./type";

export const DEFAULT_BUILD: Build = {
  name: "Lexington Striker",
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
      Mask: {
        name: "Coyote",
        attributes: [RedCore(), p.CHC(), p.CHD(), p.CHD({ type: "Mod" })],
      },
      Backpack: { name: "", attributes: [RedCore()] },
      Chest: { name: "", attributes: [RedCore()] },
      Gloves: { name: "", attributes: [RedCore()] },
      Holster: { name: "", attributes: [RedCore()] },
      Kneepads: { name: "", attributes: [RedCore()] },
    },
    Extras: {
      Watch: {
        name: "Keener's Watch",
        attributes: [...KeenersWatchRed()],
      },
      Specialization: {
        name: "Gunner",
        attributes: [
          p.WDType({ wdtype: "AR Damage" }),
          p.WDType({ wdtype: "LMG Damage" }),
          p.WDType({ wdtype: "Rifle Damage" }),
        ],
      },
    },
  },
};
