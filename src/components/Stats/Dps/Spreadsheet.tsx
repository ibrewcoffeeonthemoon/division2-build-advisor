import { calDamage } from "@/lib/damage";
import { Items } from "@/lib/type";
import { round } from "@/lib/utils";
import { stores } from "@/store";

const Cell = ({ className, text }: { className?: string; text: string }) => (
  <span className={`col-span-4 text-base ${className}`}>{text}</span>
);

export const Spreadsheet = ({ weapon }: { weapon: Items<"Weapons"> }) => {
  const { dpsRecord: d } = calDamage(weapon, stores.edit.state());
  const format = (x: number) => round(x, 0).toLocaleString();

  return (
    <>
      {/* Health */}
      <Cell className="col-span-2" text="Health C" />
      <Cell className="font-light" text={format(d.bodyshot.health.cover)} />
      <Cell className="text-red-700" text={format(d.headshot.health.cover)} />

      <Cell text="Health oC" />
      <Cell className="font-light" text={format(d.bodyshot.health.nocover)} />
      <Cell className="text-red-700" text={format(d.headshot.health.nocover)} />

      {/* Armor */}
      <Cell text="Armor C" />
      <Cell
        className="text-blue-600 font-light"
        text={format(d.bodyshot.armor.cover)}
      />
      <Cell className="text-blue-600" text={format(d.headshot.armor.cover)} />

      <Cell text="Armor oC" />
      <Cell
        className="text-blue-600 font-light"
        text={format(d.bodyshot.armor.nocover)}
      />
      <Cell className="text-blue-600" text={format(d.headshot.armor.nocover)} />
    </>
  );
};
