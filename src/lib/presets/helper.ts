import { Attribute, AttributeType } from "../type/attribute";

export const WD = (
  value?: number,
  uptime?: number,
  type?: AttributeType,
): Attribute => ({
  name: "Weapon Damage",
  amplifier: "WDCore",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.15,
});

export const CHC = (
  value?: number,
  uptime?: number,
  type?: AttributeType,
): Attribute => ({
  name: "Critical Hit Chance",
  amplifier: "CHC",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.06,
});

export const CHD = (
  value?: number,
  uptime?: number,
  type?: AttributeType,
): Attribute => ({
  name: "Critical Hit Damage",
  amplifier: "CHD",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.12,
});

export const HS = (
  value?: number,
  uptime?: number,
  type?: AttributeType,
): Attribute => ({
  name: "Critical Hit Damage",
  amplifier: "CHD",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.1,
});
