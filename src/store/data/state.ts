import { Attribute } from "@/lib/type";
import { createItemRecord } from "../utils";

type CategoryState = {
  name: string;
  attributes: Attribute[];
};

export type State = {
  state: Record<string, Record<string, CategoryState>>;
};

export const state: () => State["state"] = () =>
  createItemRecord(() => ({
    name: "",
    attributes: [],
  }));
