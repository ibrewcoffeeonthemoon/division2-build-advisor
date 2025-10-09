import { Attribute } from "../type/attribute";
import * as p from "./helper";

export const RedCore = (): Attribute => p.WD();

export const WeaponExpertise = (level: number): Attribute => ({
  ...p.WD({ value: level * 0.01 }),
  note: `Expertise ${level}`,
});

export const KeenersWatchRed = (): Attribute[] => [
  p.WD({ value: 0.1 }),
  p.CHC({ value: 0.1 }),
  p.CHD({ value: 0.2 }),
  p.HS({ value: 0.2 }),
];
