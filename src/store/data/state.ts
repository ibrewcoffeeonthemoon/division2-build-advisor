import { Attribute } from "@/lib/type";
import { createItemRecord } from "../utils";

type ItemState = {
  name: string;
  attributes: Attribute[];
};

export type State = {
  state: Record<string, Record<string, ItemState>>;
};

export const state: () => State["state"] = () =>
  createItemRecord(() => ({
    name: "",
    attributes: [],
  }));
