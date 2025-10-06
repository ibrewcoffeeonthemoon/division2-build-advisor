import { store } from "@/store/data";
import { ItemCard } from "../lib/ItemCard";
import { Items, Sections } from "@/lib/type";
import { damage } from "@/lib/damage";

type Props = {
  item: Items<"Weapons">;
};

export default function Card({ item }: Props) {
  const section = "Weapons" as Sections;
  const { dmg, dps } = damage(item, store.state());
  const damageReady = (dmg !== null && dmg > 0) || (dps !== null && dps > 0);

  return (
    <ItemCard
      {...{ section, item }}
      damageDashboard={
        damageReady && (
          <div className="grid grid-cols-24 items-center">
            <h2 className="col-span-3">DMG</h2>
            <span className="col-span-7 text-info overflow-hidden overflow-ellipsis text-nowrap">
              {dmg}
            </span>
            <h2 className="col-span-3">DPS</h2>
            <span className="col-span-7 text-info overflow-hidden overflow-ellipsis text-nowrap">
              {dps}
            </span>
          </div>
        )
      }
    />
  );
}
