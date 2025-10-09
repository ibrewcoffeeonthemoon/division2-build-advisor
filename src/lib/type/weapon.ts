import { WEAPON_TYPES } from "../constant/weapon";

export type WeaponType = (typeof WEAPON_TYPES)[number];

export type WDTypesName = `${WeaponType} Damage`;
