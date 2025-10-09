import { calDamage } from "@/lib/damage";
import { Items } from "@/lib/type";
import { round } from "@/lib/utils";
import { stores } from "@/store";

const RowHead = ({ className, text }: { className?: string; text: string }) => (
  <span className={`col-span-3 text-base ${className}`}>{text}</span>
);
const Cell = ({ className, text }: { className?: string; text: string }) => (
  <span className={`col-span-3 text-base ${className}`}>{text}</span>
);

export const Spreadsheet = ({ weapon }: { weapon: Items<"Weapons"> }) => {
  const { dmgRecord: d } = calDamage(weapon, stores.edit.state());
  const format = (x: number) => round(x, 0).toLocaleString();

  return (
    <div className="col-span-12 grid grid-cols-15 p-0 text-right">
      {/* header */}
      <span className="col-span-6 col-start-4">Normal</span>
      <span className="col-span-6">Critical</span>
      <span className="col-span-3 col-start-4">Body</span>
      <span className="col-span-3">Head</span>
      <span className="col-span-3">Body</span>
      <span className="col-span-3">Head</span>

      {/* Health */}
      <RowHead text="Health C" />
      <Cell
        className="font-light"
        text={format(d.normal.bodyshot.health.cover)}
      />
      <Cell
        className="text-red-700"
        text={format(d.normal.headshot.health.cover)}
      />
      <Cell
        className="text-orange-400 font-bold"
        text={format(d.critical.bodyshot.health.cover)}
      />
      <Cell
        className="text-orange-400 font-extrabold"
        text={format(d.critical.headshot.health.cover)}
      />

      <RowHead text="Health oC" />
      <Cell
        className="font-light"
        text={format(d.normal.bodyshot.health.nocover)}
      />
      <Cell
        className="text-red-700"
        text={format(d.normal.headshot.health.nocover)}
      />
      <Cell
        className="text-orange-400 font-bold"
        text={format(d.critical.bodyshot.health.nocover)}
      />
      <Cell
        className="text-orange-400 font-extrabold"
        text={format(d.critical.headshot.health.nocover)}
      />

      {/* Armor */}
      <RowHead text="Armor C" />
      <Cell
        className="text-blue-600 font-light"
        text={format(d.normal.bodyshot.armor.cover)}
      />
      <Cell
        className="text-blue-600"
        text={format(d.normal.headshot.armor.cover)}
      />
      <Cell
        className="text-blue-600 font-bold"
        text={format(d.critical.bodyshot.armor.cover)}
      />
      <Cell
        className="text-blue-600 font-extrabold"
        text={format(d.critical.headshot.armor.cover)}
      />

      <RowHead text="Armor oC" />
      <Cell
        className="text-blue-600 font-light"
        text={format(d.normal.bodyshot.armor.nocover)}
      />
      <Cell
        className="text-blue-600"
        text={format(d.normal.headshot.armor.nocover)}
      />
      <Cell
        className="text-blue-600 font-bold"
        text={format(d.critical.bodyshot.armor.nocover)}
      />
      <Cell
        className="text-blue-600 font-extrabold"
        text={format(d.critical.headshot.armor.nocover)}
      />
    </div>
  );
};
