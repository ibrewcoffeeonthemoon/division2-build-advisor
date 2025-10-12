import { calDamage } from "@/lib/damage";
import { Items } from "@/lib/type";
import { round } from "@/lib/utils";
import { stores } from "@/store";

const ColHead = ({ className, text }: { className?: string; text: string }) => (
  <span className={`col-span-6 text-base ${className}`}>{text}</span>
);
const RowHead = ({ className, text }: { className?: string; text: string }) => (
  <span className={`col-span-3 text-base ${className}`}>{text}</span>
);
const Cell = ({ className, text }: { className?: string; text: string }) => {
  const textSize =
    text.length <= 7 ? "text-md" : text.length <= 9 ? "text-sm" : "text-xs";
  return <span className={`col-span-6 ${textSize} ${className}`}>{text}</span>;
};

export const Spreadsheet = ({ weapon }: { weapon: Items<"Weapons"> }) => {
  const { dpsRecord: d } = calDamage(weapon, stores.edit.state());
  const format = (x: number) => round(x, 0).toLocaleString();

  return (
    <div className="col-span-12 grid grid-cols-15 items-center p-0 text-right">
      <ColHead className="col-start-4" text="Body" />
      <ColHead className="" text="Head" />

      {/* Health */}
      <RowHead className="col-span-2" text="Health C" />
      <Cell className="font-light" text={format(d.bodyshot.health.cover)} />
      <Cell className="text-red-700" text={format(d.headshot.health.cover)} />

      <RowHead text="Health oC" />
      <Cell className="font-light" text={format(d.bodyshot.health.nocover)} />
      <Cell className="text-red-700" text={format(d.headshot.health.nocover)} />

      {/* Armor */}
      <RowHead text="Armor C" />
      <Cell
        className="text-blue-600 font-light"
        text={format(d.bodyshot.armor.cover)}
      />
      <Cell className="text-blue-600" text={format(d.headshot.armor.cover)} />

      <RowHead text="Armor oC" />
      <Cell
        className="text-blue-600 font-light"
        text={format(d.bodyshot.armor.nocover)}
      />
      <Cell className="text-blue-600" text={format(d.headshot.armor.nocover)} />
    </div>
  );
};
