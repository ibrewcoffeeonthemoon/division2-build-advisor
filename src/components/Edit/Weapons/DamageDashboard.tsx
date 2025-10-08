import { stores } from "@/store";
import { calDamage } from "@/lib/damage";
import { Items, CategoryKey } from "@/lib/type";

type Props = {
  item: Items<"Weapons">;
};

export const DamageDashboard = ({ item }: Props) => {
  const category = "Weapons" as CategoryKey;
  const open = stores.ui.Edit.state().section.item.open[category][item];
  const { dmgRecord, dpsRecord } = calDamage(item, stores.edit.state());
  const dmg = dmgRecord.normal.bodyshot.health.nocover;
  const dps = dpsRecord.normal.bodyshot.health.nocover;
  const damageReady = (dmg !== null && dmg > 0) || (dps !== null && dps > 0);

  return (
    (open || damageReady) && (
      <div className="grid grid-cols-24 items-center">
        <h2 className="col-span-3">DMG</h2>
        <span className="col-span-7 text-info overflow-hidden overflow-ellipsis text-nowrap">
          {dmg && Math.round(dmg).toLocaleString()}
        </span>
        <h2 className="col-span-3">DPS</h2>
        <span className="col-span-7 text-info overflow-hidden overflow-ellipsis text-nowrap">
          {dps && Math.round(dps).toLocaleString()}
        </span>
      </div>
    )
  );
};
