import { ItemCard } from "../lib/ItemCard";
import { Items, CategoryKey } from "@/lib/type";

type Props = {
  item: Items<"Gears">;
};

export default function Card({ item }: Props) {
  const category = "Gears" as CategoryKey;

  return <ItemCard {...{ category, item }} />;
}
