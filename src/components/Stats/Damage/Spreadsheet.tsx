import { calDamage } from "@/lib/damage";
import { Items } from "@/lib/type";
import { round } from "@/lib/utils";
import { stores } from "@/store";

const Cell = ({ className, text }: { className?: string; text: string }) => (
  <span className={`col-span-3 text-base ${className}`}>{text}</span>
);

export const Spreadsheet = ({ weapon }: { weapon: Items<"Weapons"> }) => {
  const { dmgRecord: d } = calDamage(weapon, stores.data.state());
  const format = (x: number) => round(x, 0).toLocaleString();

  return (
    <>
      {/* Health */}
      <Cell text="Health C" />
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

      <Cell text="Health oC" />
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
      <Cell text="Armor C" />
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

      <Cell text="Armor oC" />
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
    </>
  );
};
