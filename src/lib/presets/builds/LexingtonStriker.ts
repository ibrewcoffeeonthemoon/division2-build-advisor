import { Build } from "@/lib/type";
import { AgentBasic, KeenersWatchRed, RedCore, WeaponExpertise } from "../";
import * as p from "../helper";

export const LexingtonStriker: Build = {
  name: "Lexington Striker",
  items: {
    Weapons: {
      Primary: {
        name: "Lexington",
        baseDamage: 48_700,
        rpm: 850,
        attributes: [
          RedCore(),
          p.WDType({ wdtype: "AR Damage" }),
          p.DTH({ value: 0.21 }),
          p.DTTOOC({ value: 0.1 }),
          {
            amplifier: "AMP1",
            name: "< Custom >",
            type: "Talent",
            uptime: 1,
            value: 0.3,
            note: "Ranger",
          },
          WeaponExpertise(30),
        ],
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
      Backpack: {
        name: "Striker",
        attributes: [
          RedCore(),
          p.CHC(),
          p.CHD(),
          p.CHD({ type: "Mod" }),
          {
            amplifier: "TWD",
            name: "< Custom >",
            type: "Talent",
            uptime: 1,
            value: 0.65,
            note: "Risk Management",
          },
        ],
      },
      Chest: {
        name: "Lengmo",
        attributes: [RedCore(), p.CHD(), p.CHD({ type: "Mod" })],
      },
      Gloves: { name: "Striker", attributes: [RedCore(), p.CHD()] },
      Holster: { name: "Striker", attributes: [RedCore(), p.CHD()] },
      Kneepads: { name: "Striker", attributes: [RedCore(), p.CHD()] },
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
