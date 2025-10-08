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
  const section = "Weapons" as CategoryKey;

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
      extraInput2={
        <>
          <WeaponTypeInput {...{ section, item }} />
          <div className="col-span-6" />
        </>
      }
    />
  );
}
