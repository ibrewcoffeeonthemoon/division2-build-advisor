import { ItemCard } from "../lib/ItemCard";
import { Items, Sections } from "@/lib/type";
import { BaseDamage } from "./BaseDamage";
import { Rpm } from "./Rpm";
import { DamageDashboard } from "./DamageDashboard";

type Props = {
  item: Items<"Weapons">;
};

export default function Card({ item }: Props) {
  const section = "Weapons" as Sections;

  return (
    <ItemCard
      {...{ section, item }}
      damageDashboard={<DamageDashboard {...{ item }} />}
      extraInput1={
        <>
          <BaseDamage {...{ section, item }} />
          <Rpm {...{ section, item }} />
        </>
      }
    />
  );
}
