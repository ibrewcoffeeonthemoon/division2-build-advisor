import {
  CoverNoCoverShotType,
  DpsRecord,
  HeadBodyShotType,
  HealthArmorShotType,
} from "../dps/record";
import { createDpsRecord } from "../dps/record";

const NORMAL_CRIT = ["normal", "critical"] as const;

export type NormalCriticalShotType = (typeof NORMAL_CRIT)[number];

export type DmgRecord<T> = Record<NormalCriticalShotType, DpsRecord<T>>;

export const createDmgRecord = <T>(
  fn: (
    n0: NormalCriticalShotType,
    n1: HeadBodyShotType,
    n2: HealthArmorShotType,
    n3: CoverNoCoverShotType,
  ) => T,
) => {
  //prettier-ignore
  const result: Record<string, Record<string, Record<string, Record<string, T>>>> = {};

  NORMAL_CRIT.forEach((n0) => {
    result[n0] = createDpsRecord((n1, n2, n3) => fn(n0, n1, n2, n3));
  });

  return result as DmgRecord<T>;
};
