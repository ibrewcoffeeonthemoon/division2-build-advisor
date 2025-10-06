import { SCHEMA } from "@/lib/constant";
import { ItemRecords, SectionRecords } from "@/lib/type";

export const createSectionRecords = <T>(fn: (section: string) => T) => {
  const result: Record<string, T> = {};
  for (const section of Object.keys(SCHEMA)) {
    result[section] = fn(section);
  }
  return result as SectionRecords<T>;
};

export const createItemRecords = <T>(
  fn: (section: string, item: string) => T,
) => {
  const result: Record<string, Record<string, T>> = {};
  for (const [section, items] of Object.entries(SCHEMA)) {
    result[section] = {};
    for (const item of Object.keys(items)) {
      result[section][item] = fn(section, item);
    }
  }
  return result as ItemRecords<T>;
};
