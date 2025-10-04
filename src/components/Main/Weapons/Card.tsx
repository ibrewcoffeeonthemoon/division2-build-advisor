import Sections from "@/lib/type/sections";
import * as Items from "@/lib/type/items";
import { ItemCard } from "../lib/ItemCard";

type Props = {
  category: Items.Weapons;
};

export default function Card({ category }: Props) {
  const section = "Weapons" as Sections;

  return <ItemCard {...{ section, category }} />;
}
