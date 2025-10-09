import { WeaponType } from "../type";

export const WEAPON_TYPES = [
  "AR",
  "LMG",
  "SMG",
  "Shotgun",
  "Rifle",
  "MMR",
  "Pistol",
  "Signature",
] as const;

export const WEAPON_TYPES_WDTYPE_MAP = Object.fromEntries(
  WEAPON_TYPES.map((name) => [name, name + " Damage"]),
) as Record<WeaponType, string>;

export const WDTYPE_NAMES = Object.values(WEAPON_TYPES_WDTYPE_MAP);
