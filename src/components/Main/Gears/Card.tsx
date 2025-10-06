import Sections from "@/lib/type/sections";
import { ItemCard } from "../lib/ItemCard";
import { Items } from "@/lib/type";

type Props = {
  item: Items<"Gears">;
};

export default function Card({ item }: Props) {
  const section = "Gears" as Sections;

  return <ItemCard {...{ section, item }} />;
}
