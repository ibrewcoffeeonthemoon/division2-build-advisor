const HEADBODY_BODYSHOT = ["headshot", "bodyshot"] as const;
const HEALTH_ARMOR = ["health", "armor"] as const;
const COVER_NOCOVER = ["cover", "nocover"] as const;

export type HeadBodyShotType = (typeof HEADBODY_BODYSHOT)[number];
export type HealthArmorShotType = (typeof HEALTH_ARMOR)[number];
export type CoverNoCoverShotType = (typeof COVER_NOCOVER)[number];

// prettier-ignore
export type DpsRecord<T> = 
    Record<HeadBodyShotType, 
      Record<HealthArmorShotType, 
        Record<CoverNoCoverShotType, T>>>

export const createDpsRecord = <T>(
  fn: (
    n1: HeadBodyShotType,
    n2: HealthArmorShotType,
    n3: CoverNoCoverShotType,
  ) => T,
) => {
  //prettier-ignore
  const result: Record<string, Record<string, Record<string, T>>> = {};

  HEADBODY_BODYSHOT.forEach((n1) => {
    result[n1] = {};
    HEALTH_ARMOR.forEach((n2) => {
      result[n1][n2] = {};
      COVER_NOCOVER.forEach((n3) => {
        result[n1][n2][n3] = fn(n1, n2, n3);
      });
    });
  });

  return result as DpsRecord<T>;
};
