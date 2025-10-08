import { ItemCard } from "../lib/ItemCard";
import { Items, CategoryKey } from "@/lib/type";

type Props = {
  item: Items<"Gears">;
};

export default function Card({ item }: Props) {
  const section = "Gears" as CategoryKey;

  return <ItemCard {...{ section, item }} />;
}
