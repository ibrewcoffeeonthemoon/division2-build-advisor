import { Build } from "./type";

export const DEFAULT_BUILD: Build = {
  name: "6 Red Lexington Build",
  items: {
    Weapons: {
      Primary: {
        name: "Lexington",
        baseDamage: 48_700,
        rpm: 850,
        attributes: [
          {
            name: "Weapon Damage",
            amplifier: "WDCore",
            type: "Attribute",
            note: "",
            uptime: 1,
            value: 0.15,
          },
        ],
      },
      Secondary: { name: "", attributes: [] },
      Sidearm: { name: "", attributes: [] },
      Signature: { name: "", attributes: [] },
    },
    Gears: {
      Mask: { name: "", attributes: [] },
      Backpack: { name: "", attributes: [] },
      Chest: { name: "", attributes: [] },
      Gloves: { name: "", attributes: [] },
      Holster: { name: "", attributes: [] },
      Kneepads: { name: "", attributes: [] },
    },
    Extras: {
      Watch: { name: "", attributes: [] },
      Specialization: { name: "", attributes: [] },
    },
  },
};
