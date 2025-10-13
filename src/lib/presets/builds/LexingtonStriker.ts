import { Build } from "@/lib/type";
import { AgentBasic, KeenersWatchRed, RedCore, WeaponExpertise } from "../";
import * as p from "../helper";

export const LexingtonStriker: Build = {
  name: "Lexington Striker",
  items: {
    Weapons: {
      Primary: {
        name: "Bluescreen",
        baseDamage: 62_361,
        rpm: 720,
        weaponType: "LMG",
        attributes: [
          p.WDType({ wdtype: "LMG Damage" }),
          p.DTTOOC({ value: 0.12 }),
          p.DTA({ value: 0.06 }),
          WeaponExpertise(30),
          p.ROF({ value: 0.2 }),
        ],
      },
      Secondary: {
        name: "Lexington",
        baseDamage: 48_700,
        rpm: 850,
        weaponType: "AR",
        attributes: [
          p.WDType({ wdtype: "AR Damage" }),
          p.DTH({ value: 0.21 }),
          p.DTTOOC({ value: 0.1 }),
          WeaponExpertise(30),
          {
            amplifier: "AMP1",
            name: "< AMP1 >",
            type: "Talent",
            uptime: 1,
            value: 0.25,
            note: "Ranger",
          },
        ],
      },
      Sidearm: { name: "", attributes: [] },
      Signature: { name: "", attributes: [] },
    },
    Gears: {
      Mask: {
        name: "Coyote",
        attributes: [RedCore(), p.CHC(), p.CHD(), p.CHC({ type: "Mod" })],
      },
      Backpack: {
        name: "Striker",
        attributes: [
          RedCore(),
          p.CHC(),
          p.CHD({ type: "Mod" }),
          {
            amplifier: "TWD",
            name: "< TWD >",
            type: "Talent",
            uptime: 1,
            value: 0.9,
            note: "Risk Management",
          },
        ],
      },
      Chest: {
        name: "Lengmo",
        attributes: [p.CHD({ type: "Mod" })],
      },
      Gloves: { name: "Striker", attributes: [RedCore(), p.CHC()] },
      Holster: {
        name: "Striker",
        attributes: [p.ROF({ type: "Gearset" }), RedCore(), p.CHD()],
      },
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
        attributes: [
          p.WD({ value: 0.25, uptime: 0 }),
          p.ROF({ value: 0.25, uptime: 0 }),
        ],
      },
    },
  },
};
