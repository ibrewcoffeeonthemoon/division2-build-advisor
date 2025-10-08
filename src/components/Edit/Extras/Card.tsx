import { ItemCard } from "../lib/ItemCard";
import { Items, CategoryKey } from "@/lib/type";

type Props = {
  item: Items<"Extras">;
};

export default function Card({ item }: Props) {
  const category = "Extras" as CategoryKey;

  return <ItemCard {...{ category, item }} />;
}
