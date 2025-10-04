import Sections from "@/lib/type/sections";
import * as Items from "@/lib/type/items";
import { ItemCard } from "../lib/ItemCard";

type Props = {
  category: Items.Extras;
};

export default function Card({ category }: Props) {
  const section = "Extras" as Sections;

  return <ItemCard {...{ section, category }} />;
}
