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
