import Sections from "@/lib/type/sections";
import { ItemCard } from "../lib/ItemCard";
import { Items } from "@/lib/type";

type Props = {
  item: Items<"Extras">;
};

export default function Card({ item }: Props) {
  const section = "Extras" as Sections;

  return <ItemCard {...{ section, item }} />;
}
