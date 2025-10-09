import { stores } from "@/store";
import { calDamage } from "@/lib/damage";
import { Items, CategoryKey } from "@/lib/type";

type Props = {
  item: Items<"Weapons">;
};

export const DamageDashboard = ({ item }: Props) => {
  const category = "Weapons" as CategoryKey;
  const open = stores.ui.Edit.state().section.topic.open[category][item];
  const { dmgRecord, dpsRecord } = calDamage(item, stores.edit.state());
  const dmg = dmgRecord.normal.bodyshot.health.nocover;
  const dps = dpsRecord.normal.bodyshot.health.nocover;
  const dmgReady = (dmg ?? 0) > 0;
  const dpsReady = (dps ?? 0) > 0;

  return (
    (open || dmgReady || dpsReady) && (
      <div className="grid grid-cols-24 items-center">
        <h2 className="col-span-3">DMG</h2>
        <span className="col-span-7 text-info overflow-hidden overflow-ellipsis text-nowrap">
          {dmgReady && Math.round(dmg).toLocaleString()}
        </span>
        <h2 className="col-span-3">DPS</h2>
        <span className="col-span-7 text-info overflow-hidden overflow-ellipsis text-nowrap">
          {dpsReady && Math.round(dps).toLocaleString()}
        </span>
      </div>
    )
  );
};
