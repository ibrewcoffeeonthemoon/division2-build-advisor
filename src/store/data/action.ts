import { Amplifier, Attribute, AttributeType, WeaponType } from "@/lib/type";

export type Action = {
  setName: (sec: string, item: string, val: string) => void;
  setBaseDamage: (sec: string, item: string, val: number | null) => void;
  setRpm: (sec: string, item: string, val: number | null) => void;
  setWeaponType: (sec: string, item: string, val: WeaponType | null) => void;
  appendAttribute: (sec: string, item: string, attr: Attribute) => void;
  removeAttribute: (sec: string, item: string, index: number) => void;
  changeAttributeName: (
    sec: string,
    item: string,
    index: number,
    val: string,
  ) => void;
  changeAttributeAmplifier: (
    sec: string,
    item: string,
    index: number,
    val: Amplifier,
  ) => void;
  changeAttributeValue: (
    sec: string,
    item: string,
    index: number,
    val: number,
  ) => void;
  changeAttributeUptime: (
    sec: string,
    item: string,
    index: number,
    val: number,
  ) => void;
  changeAttributeType: (
    sec: string,
    item: string,
    index: number,
    val: AttributeType,
  ) => void;
  changeAttributeNote: (
    sec: string,
    item: string,
    index: number,
    val: string,
  ) => void;
};
