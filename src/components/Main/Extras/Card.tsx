import Sections from "@/lib/type/sections";
import * as Items from "@/lib/type/items";
import { ItemCard } from "../lib/ItemCard";

type Props = {
  item: Items.Extras;
};

export default function Card({ item }: Props) {
  const section = "Extras" as Sections;

  return <ItemCard {...{ section, item }} />;
}
