import { ItemCard } from "../lib/ItemCard";
import { Items, Sections } from "@/lib/type";

type Props = {
  item: Items<"Weapons">;
};

export default function Card({ item }: Props) {
  const section = "Weapons" as Sections;

  return <ItemCard {...{ section, item }} />;
}
