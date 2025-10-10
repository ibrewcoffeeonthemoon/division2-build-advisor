export const round = (x: number, n: number) => {
  const factor = Math.pow(10, n);
  return Math.round((x + Number.EPSILON) * factor) / factor;
};

export const keysOf = <T extends object>(obj: T): Array<keyof T> => {
  return Object.keys(obj) as Array<keyof T>;
};
