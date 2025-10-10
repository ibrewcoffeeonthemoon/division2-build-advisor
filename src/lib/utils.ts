export const round = (x: number, n: number) => {
  const factor = Math.pow(10, n);
  return Math.round((x + Number.EPSILON) * factor) / factor;
};

export const keysOf = <T extends object>(obj: T): Array<keyof T> => {
  return Object.keys(obj) as Array<keyof T>;
};

export const fromEntriesOf = <
  const T extends ReadonlyArray<readonly [PropertyKey, unknown]>,
>(
  entries: T,
): { [K in T[number] as K[0]]: K[1] } => {
  return Object.fromEntries(entries) as { [K in T[number] as K[0]]: K[1] };
};
