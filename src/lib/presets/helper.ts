import { Attribute, AttributeType } from "../type/attribute";
import { WDTypesName } from "../type/weapon";

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

export const WDType = ({
  value,
  uptime,
  type,
  wdtype,
}: Input & { wdtype?: WDTypesName } = {}): Attribute => ({
  name: wdtype ?? "AR Damage",
  amplifier: "WDType",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.15,
});

export const DTA = ({ value, uptime, type }: Input = {}): Attribute => ({
  name: "Damage to Armor",
  amplifier: "DTA",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.06,
});

export const DTH = ({ value, uptime, type }: Input = {}): Attribute => ({
  name: "Damage to Health",
  amplifier: "DTH",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.09,
});

export const DTTOOC = ({ value, uptime, type }: Input = {}): Attribute => ({
  name: "DMG to Target out of Cover",
  amplifier: "DTTOOC",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.1,
});

export const ROF = ({ value, uptime, type }: Input = {}): Attribute => ({
  name: "Rate of Fire",
  amplifier: "ROF",
  type: type ?? "Attribute",
  uptime: uptime ?? 1,
  value: value ?? 0.15,
});
