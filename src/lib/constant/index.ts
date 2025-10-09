export const SCHEMA = {
  Weapons: {
    Primary: null,
    Secondary: null,
    Sidearm: null,
    Signature: null,
  },
  Gears: {
    Mask: null,
    Backpack: null,
    Chest: null,
    Gloves: null,
    Holster: null,
    Kneepads: null,
  },
  Extras: {
    Watch: null,
    Specialization: null,
  },
} as const;

export const AMPLIFIERS = [
  "WDCore",
  "WDType",
  "WDTalent",
  "TWD",
  "AMP1",
  "AMP2",
  "AMP3",
  "CHC",
  "CHD",
  "HS",
  "DTA",
  "DTH",
  "DTTOOC",
  "ROF",
  "None",
] as const;
