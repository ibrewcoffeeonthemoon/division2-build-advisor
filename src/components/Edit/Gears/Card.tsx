import { ItemCard } from "../lib/ItemCard";
import { Items, Sections } from "@/lib/type";

type Props = {
  item: Items<"Gears">;
};

export default function Card({ item }: Props) {
  const section = "Gears" as Sections;

  return <ItemCard {...{ section, item }} />;
}
