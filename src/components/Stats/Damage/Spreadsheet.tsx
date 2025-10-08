import { calDamage } from "@/lib/damage";
import { Items } from "@/lib/type";
import { round } from "@/lib/utils";
import { stores } from "@/store";

const Cell = ({ style, text }: { style?: string; text: string }) => (
  <span className={`col-span-3 ${style}`}>{text}</span>
);

export const Spreadsheet = ({ weapon }: { weapon: Items<"Weapons"> }) => {
  const { dmgRecord: d } = calDamage(weapon, stores.data.state());
  const format = (x: number) => round(x, 0).toLocaleString();

  return (
    <>
      <Cell text="Health inC" />
      <Cell text={format(d.normal.bodyshot.health.cover)} />
      <Cell
        style="text-red-700"
        text={format(d.normal.headshot.health.cover)}
      />
      <Cell
        style="text-orange-400"
        text={format(d.critical.bodyshot.health.cover)}
      />
      <Cell
        style="text-orange-400 font-bold"
        text={format(d.critical.headshot.health.cover)}
      />

      <Cell text="Health ooC" />
      <Cell text={format(d.normal.bodyshot.health.nocover)} />
      <Cell
        style="text-red-700"
        text={format(d.normal.headshot.health.nocover)}
      />
      <Cell
        style="text-orange-400"
        text={format(d.critical.bodyshot.health.nocover)}
      />
      <Cell
        style="text-orange-400 font-bold"
        text={format(d.critical.headshot.health.nocover)}
      />

      <Cell text="Armor inC" />
      <Cell text={format(d.normal.bodyshot.armor.cover)} />
      <Cell style="text-red-700" text={format(d.normal.headshot.armor.cover)} />
      <Cell
        style="text-orange-400"
        text={format(d.critical.bodyshot.armor.cover)}
      />
      <Cell
        style="text-orange-400 font-bold"
        text={format(d.critical.headshot.armor.cover)}
      />

      <Cell text="Armor ooC" />
      <Cell text={format(d.normal.bodyshot.armor.nocover)} />
      <Cell
        style="text-red-700"
        text={format(d.normal.headshot.armor.nocover)}
      />
      <Cell
        style="text-orange-400"
        text={format(d.critical.bodyshot.armor.nocover)}
      />
      <Cell
        style="text-orange-400 font-bold"
        text={format(d.critical.headshot.armor.nocover)}
      />
    </>
  );
};
