import { Attribute } from "@/lib/type";
import * as Categories from "@/lib/type/categories";
import { ItemCard } from "../lib/ItemCard";
import { store } from "@/store/ui/Main/Weapons";

type Props = {
  category: Categories.Weapons;
};

export default function Card({ category }: Props) {
  const name = store.name()[category];

  const attributes: Attribute[] = [
    {
      type: "Attribute",
      name: "Weapon Damage",
      value: 0.15,
      uptime: 1.0,
    },
    {
      type: "Attribute",
      name: "Critical Hit Damage",
      value: 0.15,
      uptime: 1.0,
    },
    {
      type: "Attribute",
      name: "Critical Hit Chance",
      value: 0.06,
      uptime: 1.0,
    },
    {
      type: "Mod",
      name: "Headshot Damage",
      value: 0.1,
      uptime: 1.0,
    },
    {
      type: "Talent",
      name: "Headshot Damage",
      value: 0.1,
      uptime: 1.0,
    },
  ];

  return <ItemCard {...{ category, name, attributes }} />;
}
