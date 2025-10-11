export const round = (x: number, n: number) => {
  const factor = Math.pow(10, n);
  return Math.round((x + Number.EPSILON) * factor) / factor;
};

export const keys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

export const fromEntries = <K extends string | number | symbol, V>(
  entries: [K, V][],
): Record<K, V> => {
  return Object.fromEntries(entries) as Record<K, V>;
};
