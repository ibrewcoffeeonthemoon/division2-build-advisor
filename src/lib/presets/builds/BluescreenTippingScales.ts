import { Build } from "@/lib/type";
import { AgentBasic, KeenersWatchRed, RedCore, WeaponExpertise } from "../";
import * as p from "../helper";

export const BluescreenTippingScales: Build = {
  name: "Bluescreen Tipping Scales",
  items: {
    Weapons: {
      Primary: {
        name: "Bluescreen",
        baseDamage: 62_361,
        rpm: 720,
        attributes: [
          p.WDType({ wdtype: "LMG Damage" }),
          p.DTTOOC({ value: 0.12 }),
          p.DTA({ value: 0.06 }),
          WeaponExpertise(30),
          p.ROF({ value: 0.2 }),
        ],
      },
      Secondary: {
        name: "UIC15 MOD2",
        baseDamage: 150_316,
        rpm: 240,
        attributes: [
          p.WDType({ wdtype: "Rifle Damage" }),
          p.CHD({ value: 0.17 }),
          p.DTTOOC({ value: 0.1 }),
          WeaponExpertise(30),
        ],
      },
      Sidearm: { name: "", attributes: [] },
      Signature: { name: "", attributes: [] },
    },
    Gears: {
      Mask: {
        name: "Tipping Scales",
        attributes: [RedCore(), p.CHC(), p.CHD({ type: "Mod" })],
      },
      Backpack: {
        name: "Tipping Scales",
        attributes: [
          RedCore(),
          p.CHC(),
          p.CHD({ type: "Mod" }),
          {
            amplifier: "CHD",
            name: "< Custom >",
            type: "Talent",
            uptime: 1,
            value: 50 * 0.07,
            note: "Throttle Control + Snow Ball",
          },
        ],
      },
      Chest: {
        name: "Belstone Armory",
        attributes: [p.CHC({ type: "Mod" })],
      },
      Gloves: {
        name: "Overdogs",
        attributes: [
          RedCore(),
          p.CHC(),
          p.CHD(),
          {
            amplifier: "AMP1",
            name: "< Custom >",
            type: "Talent",
            uptime: 1,
            value: 0.3,
            note: "Weakest Link",
          },
        ],
      },
      Holster: {
        name: "Tipping Scales",
        attributes: [
          RedCore(),
          p.CHC(),
          p.WDType({ wdtype: "LMG Damage", value: 0.3 }),
        ],
      },
      Kneepads: {
        name: "Tipping Scales",
        attributes: [RedCore(), p.CHC()],
      },
    },
    Extras: {
      Basic: {
        name: "Agent Basic",
        attributes: [...AgentBasic()],
      },
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
      Season: {
        name: "Seasonal Bonus",
        attributes: [],
      },
    },
  },
};
