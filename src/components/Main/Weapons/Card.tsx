import { stores } from "@/store";
import { ItemCard } from "../lib/ItemCard";
import { Items, Sections } from "@/lib/type";
import { damage } from "@/lib/damage";
import { BaseDamage } from "./BaseDamage";
import { Rpm } from "./Rpm";

type Props = {
  item: Items<"Weapons">;
};

export default function Card({ item }: Props) {
  const section = "Weapons" as Sections;
  const open = stores.ui.Main.state().section.item.open[section][item];
  const { dmg, dps } = damage(item, stores.data.state());
  const damageReady = (dmg !== null && dmg > 0) || (dps !== null && dps > 0);

  return (
    <ItemCard
      {...{ section, item }}
      damageDashboard={
        (open || damageReady) && (
          <div className="grid grid-cols-24 items-center">
            <h2 className="col-span-3">DMG</h2>
            <span className="col-span-7 text-info overflow-hidden overflow-ellipsis text-nowrap">
              {dmg && Math.trunc(dmg).toLocaleString()}
            </span>
            <h2 className="col-span-3">DPS</h2>
            <span className="col-span-7 text-info overflow-hidden overflow-ellipsis text-nowrap">
              {dps && Math.trunc(dps).toLocaleString()}
            </span>
          </div>
        )
      }
      damageInput={
        <>
          <BaseDamage {...{ section, item }} />
          <Rpm {...{ section, item }} />
        </>
      }
    />
  );
}
