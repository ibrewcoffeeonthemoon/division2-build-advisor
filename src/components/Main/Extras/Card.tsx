import { ItemCard } from "../lib/ItemCard";
import { Items, Sections } from "@/lib/type";

type Props = {
  item: Items<"Extras">;
};

export default function Card({ item }: Props) {
  const section = "Extras" as Sections;

  return <ItemCard {...{ section, item }} />;
}
