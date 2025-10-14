import { Amplifier } from "../type/amplifier";
import { Attribute, AttributeName, AttributeType } from "../type/attribute";
import { WDTypesName } from "../type/weapon";

type Options = {
  type?: AttributeType;
  name?: AttributeName;
  value?: number | null;
  uptime?: number | null;
  note?: string;
  amplifier?: Amplifier;
};

export const WD = (o: Options = {}): Attribute => ({
  type: o.type ?? "Attribute",
  name: o.name ?? "Weapon Damage",
  value: o.value ?? 0.15,
  uptime: o.uptime ?? 1,
  note: o.note ?? "",
  amplifier: o.amplifier ?? "WDCore",
});

export const CHC = (o: Options = {}): Attribute => ({
  type: o.type ?? "Attribute",
  name: o.name ?? "Critical Hit Chance",
  value: o.value ?? 0.06,
  uptime: o.uptime ?? 1,
  note: o.note ?? "",
  amplifier: o.amplifier ?? "CHC",
});

export const CHD = (o: Options = {}): Attribute => ({
  type: o.type ?? "Attribute",
  name: o.name ?? "Critical Hit Damage",
  value: o.value ?? 0.12,
  uptime: o.uptime ?? 1,
  note: o.note ?? "",
  amplifier: o.amplifier ?? "CHD",
});

export const HS = (o: Options = {}): Attribute => ({
  type: o.type ?? "Attribute",
  name: o.name ?? "Headshot Damage",
  value: o.value ?? 0.1,
  uptime: o.uptime ?? 1,
  note: o.note ?? "",
  amplifier: o.amplifier ?? "HS",
});

export const WDType = (
  o: Options & { wdtype?: WDTypesName } = {},
): Attribute => ({
  type: o.type ?? "Attribute",
  name: o.wdtype ?? "AR Damage",
  value: o.value ?? 0.15,
  uptime: o.uptime ?? 1,
  note: o.note ?? "",
  amplifier: o.amplifier ?? "WDType",
});

export const DTA = (o: Options = {}): Attribute => ({
  type: o.type ?? "Attribute",
  name: o.name ?? "Damage to Armor",
  value: o.value ?? 0.06,
  uptime: o.uptime ?? 1,
  note: o.note ?? "",
  amplifier: o.amplifier ?? "DTA",
});

export const DTH = (o: Options = {}): Attribute => ({
  type: o.type ?? "Attribute",
  name: o.name ?? "Damage to Health",
  value: o.value ?? 0.09,
  uptime: o.uptime ?? 1,
  note: o.note ?? "",
  amplifier: o.amplifier ?? "DTH",
});

export const DTTOOC = (o: Options = {}): Attribute => ({
  type: o.type ?? "Attribute",
  name: o.name ?? "DMG to Target out of Cover",
  value: o.value ?? 0.1,
  uptime: o.uptime ?? 1,
  note: o.note ?? "",
  amplifier: o.amplifier ?? "DTTOOC",
});

export const ROF = (o: Options = {}): Attribute => ({
  type: o.type ?? "Attribute",
  name: o.name ?? "Rate of Fire",
  value: o.value ?? 0.15,
  uptime: o.uptime ?? 1,
  note: o.note ?? "",
  amplifier: o.amplifier ?? "ROF",
});
