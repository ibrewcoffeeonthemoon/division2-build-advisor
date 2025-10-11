import { Build } from "@/lib/type";
import { Amplifier } from "@/lib/type/amplifier";
import { Attribute, AttributeName, AttributeType } from "@/lib/type/attribute";
import { WeaponType } from "@/lib/type/weapon";
import { SectionName, TopicName } from "./state";

export type Action = {
  action: {
    build: {
      setBuild: (val: Build) => void;
      setName: (val: string) => void;
    };
    item: {
      setName: <S extends SectionName>(
        cat: S,
        item: TopicName<S>,
        val: string,
      ) => void;
      setBaseDamage: <S extends SectionName>(
        cat: S,
        item: TopicName<S>,
        val: number | null,
      ) => void;
      setRpm: <S extends SectionName>(
        cat: S,
        item: TopicName<S>,
        val: number | null,
      ) => void;
      setWeaponType: <S extends SectionName>(
        cat: S,
        item: TopicName<S>,
        val: WeaponType | null,
      ) => void;
    };
    attribute: {
      append: <S extends SectionName>(
        cat: S,
        item: TopicName<S>,
        attr: Attribute,
      ) => void;
      remove: <S extends SectionName>(
        cat: S,
        item: TopicName<S>,
        index: number,
      ) => void;
      setName: <S extends SectionName>(
        cat: S,
        item: TopicName<S>,
        index: number,
        val: AttributeName,
      ) => void;
      setAmplifier: <S extends SectionName>(
        cat: S,
        item: TopicName<S>,
        index: number,
        val: Amplifier,
      ) => void;
      setValue: <S extends SectionName>(
        cat: S,
        item: TopicName<S>,
        index: number,
        val: number | null,
      ) => void;
      setUptime: <S extends SectionName>(
        cat: S,
        item: TopicName<S>,
        index: number,
        val: number | null,
      ) => void;
      setType: <S extends SectionName>(
        cat: S,
        item: TopicName<S>,
        index: number,
        val: AttributeType,
      ) => void;
      setNote: <S extends SectionName>(
        cat: S,
        item: TopicName<S>,
        index: number,
        val: string,
      ) => void;
    };
  };
};
