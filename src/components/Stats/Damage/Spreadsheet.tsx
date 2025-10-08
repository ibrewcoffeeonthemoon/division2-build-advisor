import { calDamage } from "@/lib/damage";
import { Items } from "@/lib/type";
import { round } from "@/lib/utils";
import { stores } from "@/store";

export const Spreadsheet = ({ weapon }: { weapon: Items<"Weapons"> }) => {
  const { dmgRecord: d } = calDamage(weapon, stores.data.state());
  const format = (x: number) => round(x, 0).toLocaleString();

  return (
    <>
      <span className="col-span-3">health inC</span>
      <span className="col-span-3">
        {format(d.normal.bodyshot.health.cover)}
      </span>
      <span className="col-span-3 text-red-700">
        {format(d.normal.headshot.health.cover)}
      </span>
      <span className="col-span-3 text-orange-400">
        {format(d.critical.bodyshot.health.cover)}
      </span>
      <span className="col-span-3 text-orange-400 font-bold">
        {format(d.critical.headshot.health.cover)}
      </span>
      <span className="col-span-3">health ooC</span>
      <span className="col-span-3">
        {format(d.normal.bodyshot.health.nocover)}
      </span>
      <span className="col-span-3 text-red-700">
        {format(d.normal.headshot.health.nocover)}
      </span>
      <span className="col-span-3 text-orange-400">
        {format(d.critical.bodyshot.health.nocover)}
      </span>
      <span className="col-span-3 text-orange-400 font-bold">
        {format(d.critical.headshot.health.nocover)}
      </span>
    </>
  );
};
