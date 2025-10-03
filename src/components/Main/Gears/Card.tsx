import Sections from "@/lib/type/sections";
import * as Categories from "@/lib/type/categories";
import { ItemCard } from "../lib/ItemCard";

type Props = {
  category: Categories.Gears;
};

export default function Card({ category }: Props) {
  const section = "Gears" as Sections;

  return <ItemCard {...{ section, category }} />;
}
