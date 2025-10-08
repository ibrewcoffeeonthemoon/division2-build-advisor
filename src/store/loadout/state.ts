import { Build, Item } from "@/lib/type";
import { createItemRecords } from "../record";

export type State = {
  state: {
    builds: Build[];
  };
};

export const state: () => State["state"] = () => {
  const dummyItem = (name: string): Item => ({ name, attributes: [] });
  return {
    builds: [
      {
        name: "Hello World",
        items: createItemRecords<Item>(() => dummyItem("demo1")),
      },
      {
        name: "Hello World Again",
        items: createItemRecords<Item>(() => dummyItem("demo2")),
      },
    ],
  };
};
