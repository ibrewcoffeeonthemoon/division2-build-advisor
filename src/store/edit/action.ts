import { Attribute, AttributeType, Build } from "@/lib/type";
import { Amplifier } from "@/lib/type/amplifier";
import { WeaponType } from "@/lib/type/weapon";

export type Action = {
  action: {
    build: {
      setBuild: (val: Build) => void;
      setName: (val: string) => void;
    };
    item: {
      setName: (cat: string, item: string, val: string) => void;
      setBaseDamage: (cat: string, item: string, val: number | null) => void;
      setRpm: (cat: string, item: string, val: number | null) => void;
      setWeaponType: (
        cat: string,
        item: string,
        val: WeaponType | null,
      ) => void;
    };
    attribute: {
      append: (cat: string, item: string, attr: Attribute) => void;
      remove: (cat: string, item: string, index: number) => void;
      setName: (cat: string, item: string, index: number, val: string) => void;
      setAmplifier: (
        cat: string,
        item: string,
        index: number,
        val: Amplifier,
      ) => void;
      setValue: (
        cat: string,
        item: string,
        index: number,
        val: number | null,
      ) => void;
      setUptime: (
        cat: string,
        item: string,
        index: number,
        val: number | null,
      ) => void;
      setType: (
        cat: string,
        item: string,
        index: number,
        val: AttributeType,
      ) => void;
      setNote: (cat: string, item: string, index: number, val: string) => void;
    };
  };
};
