import { Attribute } from "@/lib/type";
import Sections from "@/lib/type/sections";
import * as Categories from "@/lib/type/categories";
import { ItemCard } from "../lib/ItemCard";

type Props = {
  category: Categories.Gears;
};

export default function Card({ category }: Props) {
  const section = "Weapons" as Sections;
  const name = "temp";

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

  return <ItemCard {...{ section, category, name, attributes }} />;
}
