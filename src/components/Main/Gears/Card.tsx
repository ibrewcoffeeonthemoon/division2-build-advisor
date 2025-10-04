import Sections from "@/lib/type/sections";
import * as Items from "@/lib/type/items";
import { ItemCard } from "../lib/ItemCard";

type Props = {
  category: Items.Gears;
};

export default function Card({ category }: Props) {
  const section = "Gears" as Sections;

  return <ItemCard {...{ section, category }} />;
}
