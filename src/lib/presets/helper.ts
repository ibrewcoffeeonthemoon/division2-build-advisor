import { Attribute } from "../type/attribute";

export const WD = (value?: number, uptime?: number): Attribute => ({
  name: "Weapon Damage",
  amplifier: "WDCore",
  type: "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.15,
});

export const CHC = (value?: number, uptime?: number): Attribute => ({
  name: "Critical Hit Chance",
  amplifier: "CHC",
  type: "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.06,
});

export const CHD = (value?: number, uptime?: number): Attribute => ({
  name: "Critical Hit Damage",
  amplifier: "CHD",
  type: "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.12,
});

export const HS = (value?: number, uptime?: number): Attribute => ({
  name: "Critical Hit Damage",
  amplifier: "CHD",
  type: "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.1,
});
