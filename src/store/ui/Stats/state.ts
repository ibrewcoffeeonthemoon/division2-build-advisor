import { ITEM_NAMES } from "@/lib/constant";
import { AmplifierSums } from "@/lib/damage/amplifier";
import { DmgRecord, NormalCriticalShotType } from "@/lib/damage/dmg/record";
import {
  HeadBodyShotType,
  HealthArmorShotType,
  CoverNoCoverShotType,
  DpsRecord,
} from "@/lib/damage/dps/record";

export const SECTION_NAMES = ["Basic", "Damage", "Dps"] as const;
export const TOPIC_NAMES = ITEM_NAMES.Weapons;

export type SectionName = (typeof SECTION_NAMES)[number];
export type TopicName = (typeof TOPIC_NAMES)[number];
export type Selection = [
  NormalCriticalShotType,
  HeadBodyShotType,
  HealthArmorShotType,
  CoverNoCoverShotType,
];

export const STATE = {
  section: {
    open: Object.fromEntries(SECTION_NAMES.map((sec) => [sec, false])),
    topic: {
      open: Object.fromEntries(
        SECTION_NAMES.map((sec) => [
          sec,
          Object.fromEntries(TOPIC_NAMES.map((top) => [top, false])),
        ]),
      ),
      selection: Object.fromEntries(
        SECTION_NAMES.map((sec) => [
          sec,
          Object.fromEntries(
            TOPIC_NAMES.map((top) => [top, null as Selection | null]),
          ),
        ]),
      ),
      paragraph: {
        open: Object.fromEntries(
          SECTION_NAMES.map((sec) => [
            sec,
            Object.fromEntries(TOPIC_NAMES.map((top) => [top, false])),
          ]),
        ),
      },
    },
  },
} as const;

export type DamageResult = {
  ampSums?: AmplifierSums[TopicName];
  dmgRecord?: DmgRecord<number>;
  dpsRecord?: DpsRecord<number>;
};

export const STASH = Object.fromEntries(
  TOPIC_NAMES.map((top) => [top, {} as DamageResult]),
);

export type State = {
  state: typeof STATE;
  stash: typeof STASH;
};

export const state: () => State["state"] = () => STATE;
export const stash: () => State["stash"] = () => STASH;
