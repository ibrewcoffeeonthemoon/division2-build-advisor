import {
  Amplifier,
  Attribute,
  AttributeType,
  Build,
  WeaponType,
} from "@/lib/type";

export type Action = {
  action: {
    build: {
      setBuild: (val: Build) => void;
      setBuildName: (val: string) => void;
    };
    // item
    setName: (cat: string, item: string, val: string) => void;
    setBaseDamage: (cat: string, item: string, val: number | null) => void;
    setRpm: (cat: string, item: string, val: number | null) => void;
    setWeaponType: (cat: string, item: string, val: WeaponType | null) => void;
    // attribute
    appendAttribute: (cat: string, item: string, attr: Attribute) => void;
    removeAttribute: (cat: string, item: string, index: number) => void;
    changeAttributeName: (
      cat: string,
      item: string,
      index: number,
      val: string,
    ) => void;
    changeAttributeAmplifier: (
      cat: string,
      item: string,
      index: number,
      val: Amplifier,
    ) => void;
    changeAttributeValue: (
      cat: string,
      item: string,
      index: number,
      val: number | null,
    ) => void;
    changeAttributeUptime: (
      cat: string,
      item: string,
      index: number,
      val: number | null,
    ) => void;
    changeAttributeType: (
      cat: string,
      item: string,
      index: number,
      val: AttributeType,
    ) => void;
    changeAttributeNote: (
      cat: string,
      item: string,
      index: number,
      val: string,
    ) => void;
  };
};
