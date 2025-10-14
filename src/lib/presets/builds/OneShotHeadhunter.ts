import { Build } from "@/lib/type";
import { AgentBasic, KeenersWatchRed, RedCore, WeaponExpertise } from "../";
import * as p from "../helper";

export const OneShotHeadhunter: Build = {
  name: "Oneshot Headhunter",
  items: {
    Weapons: {
      Primary: {
        name: "SR-1",
        baseDamage: 409_357,
        rpm: 60,
        weaponType: "MMR",
        attributes: [
          p.WDType({ wdtype: "MMR Damage" }),
          p.HS({ value: 1.11 }),
          p.DTTOOC({ value: 0.1 }),
          WeaponExpertise(30),
          p.HS({ value: 0.45, note: "Digital Scope", type: "Mod" }),
          p.CHD({ value: -0.05, note: "Digital Scope", type: "Mod" }),
          p.HS({ value: 0.15, note: "One in the Head - Sharpshooter" }),
          {
            amplifier: "WDTalent",
            name: "< WDTalent >",
            type: "Talent",
            uptime: 1,
            value: 12.5,
            note: "Perfect Headhunter",
          },
        ],
      },
      Secondary: {
        name: "Bullet King",
        baseDamage: 54_604,
        rpm: 850,
        weaponType: "LMG",
        attributes: [
          p.WDType({ wdtype: "LMG Damage" }),
          p.DTTOOC({ value: 0.12 }),
          p.DTA({ value: 0.06 }),
          WeaponExpertise(30),
          p.CHC({ value: 0.15, type: "Mod" }),
        ],
      },
      Sidearm: { name: "", attributes: [] },
      Signature: { name: "", attributes: [] },
    },
    Gears: {
      Mask: {
        name: "Habsburg Guard",
        attributes: [
          p.HS({ value: 0.13, type: "Brandset" }),
          RedCore(),
          p.CHD(),
          p.HS(),
          p.HS({ type: "Mod" }),
        ],
      },
      Backpack: {
        name: "Providence Defense - The Gift",
        attributes: [
          p.HS({ value: 0.13, type: "Brandset" }),
          RedCore(),
          p.HS(),
          p.HS({ type: "Mod" }),
          {
            amplifier: "TWD",
            name: "< TWD >",
            type: "Talent",
            uptime: 1,
            value: 0.25,
            note: "Perfect Vigilance",
          },
        ],
      },
      Chest: {
        name: "Walker Harris - Perfect Headhunter",
        attributes: [
          p.WD({ value: 0.05, type: "Brandset" }),
          RedCore(),
          p.HS(),
          p.HS({ value: 0.1, type: "Mod" }),
        ],
      },
      Gloves: {
        name: "Overdogs",
        attributes: [
          RedCore(),
          p.CHC(),
          p.CHD(),
          {
            amplifier: "AMP1",
            name: "< AMP1 >",
            type: "Talent",
            uptime: 1,
            value: 0.3,
            note: "Weakest Link",
          },
        ],
      },
      Holster: {
        name: "Habsburg Guard",
        attributes: [
          p.WDType({ wdtype: "MMR Damage", value: 0.2, type: "Brandset" }),
          RedCore(),
          p.CHD(),
          p.HS(),
        ],
      },
      Kneepads: {
        name: "Belstone Armory",
        attributes: [RedCore(), p.HS()],
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
        name: "Sharpshooter",
        attributes: [
          p.WDType({ wdtype: "AR Damage" }),
          p.WDType({ wdtype: "LMG Damage" }),
          p.WDType({ wdtype: "MMR Damage" }),
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
