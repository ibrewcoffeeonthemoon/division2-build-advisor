import Sections from "@/lib/type/sections";
import * as Items from "@/lib/type/items";
import { ItemCard } from "../lib/ItemCard";

type Props = {
  item: Items.Gears;
};

export default function Card({ item }: Props) {
  const section = "Gears" as Sections;

  return <ItemCard {...{ section, item }} />;
}
