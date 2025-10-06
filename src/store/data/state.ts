import { Attribute } from "@/lib/type";
import { createItemRecords } from "../record";

type ItemState = {
  name: string;
  attributes: Attribute[];
};

export type State = {
  state: Record<string, Record<string, ItemState>>;
};

export const state: () => State["state"] = () =>
  createItemRecords(() => ({
    name: "",
    attributes: [],
  }));
