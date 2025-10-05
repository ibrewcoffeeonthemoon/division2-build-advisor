import { SCHEMA, SECTIONS } from "@/lib/constant";
import { Items } from "@/lib/type";
import Sections from "@/lib/type/sections";

const createSectionRecord = <T>(fn: (section: Sections) => T) => {
  const sections = Object.keys(SCHEMA) as Sections[];
  const entries = sections.map((section) => [section, fn(section)]);
  return Object.fromEntries(entries);
};

const createItemRecord = <T>(
  fn: <S extends Sections>(section: S, item: Items<S>) => T,
) => {
  return createSectionRecord((section: Sections) => {
    const items = Object.keys(SCHEMA[section]) as Items<Sections>[];
    const entries = items.map((item) => [item, fn(section, item)]);
    return Object.fromEntries(entries);
  });
};

const obj = createItemRecord(() => ({
  value: true,
}));
