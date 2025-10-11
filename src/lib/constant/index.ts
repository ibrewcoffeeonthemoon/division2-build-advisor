export const CATEGORY_NAMES = ["Weapons", "Gears", "Extras"] as const;
export const ITEM_NAMES = {
  Weapons: ["Primary", "Secondary", "Sidearm", "Signature"] as const,
  Gears: [
    "Mask",
    "Backpack",
    "Chest",
    "Gloves",
    "Holster",
    "Kneepads",
  ] as const,
  Extras: ["Basic", "Watch", "Specialization", "Season"] as const,
} as const;

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
    Basic: null,
    Watch: null,
    Specialization: null,
    Season: null,
  },
} as const;
