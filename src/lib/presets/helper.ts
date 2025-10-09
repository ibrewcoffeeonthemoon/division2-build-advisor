import { Attribute, AttributeType } from "../type/attribute";

type Input = {
  value?: number;
  uptime?: number;
  type?: AttributeType;
};

export const WD = ({ value, uptime, type }: Input = {}): Attribute => ({
  name: "Weapon Damage",
  amplifier: "WDCore",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.15,
});

export const CHC = ({ value, uptime, type }: Input = {}): Attribute => ({
  name: "Critical Hit Chance",
  amplifier: "CHC",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.06,
});

export const CHD = ({ value, uptime, type }: Input = {}): Attribute => ({
  name: "Critical Hit Damage",
  amplifier: "CHD",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.12,
});

export const HS = ({ value, uptime, type }: Input = {}): Attribute => ({
  name: "Critical Hit Damage",
  amplifier: "HS",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.1,
});
