import Sections from "@/lib/type/sections";
import * as Categories from "@/lib/type/categories";
import { ItemCard } from "../lib/ItemCard";

type Props = {
  category: Categories.Weapons;
};

export default function Card({ category }: Props) {
  const section = "Weapons" as Sections;

  return <ItemCard {...{ section, category }} />;
}
