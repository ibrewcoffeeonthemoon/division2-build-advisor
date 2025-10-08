import { ItemCard } from "../lib/ItemCard";
import { Items, CategoryKey } from "@/lib/type";
import { BaseDamage } from "./BaseDamage";
import { Rpm } from "./Rpm";
import { DamageDashboard } from "./DamageDashboard";
import { WeaponTypeInput } from "./WeaponTypeInput";

type Props = {
  item: Items<"Weapons">;
};

export default function Card({ item }: Props) {
  const category = "Weapons" as CategoryKey;

  return (
    <ItemCard
      {...{ category, item }}
      damageDashboard={<DamageDashboard {...{ item }} />}
      extraInput1={
        <>
          <BaseDamage {...{ category, item }} />
          <Rpm {...{ category, item }} />
        </>
      }
      extraInput2={
        <>
          <WeaponTypeInput {...{ category, item }} />
          <div className="col-span-6" />
        </>
      }
    />
  );
}
