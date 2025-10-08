import { SCHEMA } from "@/lib/constant";
import { ItemRecords, CategoryRecords } from "@/lib/type";

export const createCategoryRecords = <T>(fn: (category: string) => T) => {
  const result: Record<string, T> = {};
  for (const category of Object.keys(SCHEMA)) {
    result[category] = fn(category);
  }
  return result as CategoryRecords<T>;
};

export const createItemRecords = <T>(
  fn: (category: string, item: string) => T,
) => {
  const result: Record<string, Record<string, T>> = {};
  for (const [category, items] of Object.entries(SCHEMA)) {
    result[category] = {};
    for (const item of Object.keys(items)) {
      result[category][item] = fn(category, item);
    }
  }
  return result as ItemRecords<T>;
};
