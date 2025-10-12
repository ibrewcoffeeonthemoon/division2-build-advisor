import { calDamage } from "@/lib/damage";
import { DmgRecord, NormalCriticalShotType } from "@/lib/damage/dmg/record";
import {
  HeadBodyShotType,
  HealthArmorShotType,
  CoverNoCoverShotType,
} from "@/lib/damage/dps/record";
import { Items } from "@/lib/type";
import { round } from "@/lib/utils";
import { stores } from "@/store";

const RowHead = ({ className, text }: { className?: string; text: string }) => (
  <span className={`col-span-3 text-base ${className}`}>{text}</span>
);
const Cell = ({
  className,
  index,
  d,
}: {
  className?: string;
  index: [
    NormalCriticalShotType,
    HeadBodyShotType,
    HealthArmorShotType,
    CoverNoCoverShotType,
  ];
  d: DmgRecord<number>;
  text: string;
}) => {
  const format = (x: number) => round(x, 0).toLocaleString();
  const text2 = format(d[index[0]][index[1]][index[2]][index[3]]);
  const textSize =
    text2.length <= 7 ? "text-md" : text2.length <= 9 ? "text-sm" : "text-xs";
  return <span className={`col-span-3 ${textSize} ${className}`}>{text2}</span>;
};

export const Spreadsheet = ({ weapon }: { weapon: Items<"Weapons"> }) => {
  const { dmgRecord: d } = calDamage(weapon, stores.edit.state());
  const format = (x: number) => round(x, 0).toLocaleString();

  return (
    <div className="col-span-12 grid grid-cols-15 items-center p-0 text-right">
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
        index={["normal", "bodyshot", "health", "cover"]}
        d={d}
        text={format(d.normal.bodyshot.health.cover)}
      />
      <Cell
        className="text-red-700"
        index={["normal", "headshot", "health", "cover"]}
        d={d}
        text={format(d.normal.headshot.health.cover)}
      />
      <Cell
        className="text-orange-400 font-bold"
        index={["critical", "bodyshot", "health", "cover"]}
        d={d}
        text={format(d.critical.bodyshot.health.cover)}
      />
      <Cell
        className="text-orange-400 font-extrabold"
        index={["critical", "headshot", "health", "cover"]}
        d={d}
        text={format(d.critical.headshot.health.cover)}
      />

      <RowHead text="Health oC" />
      <Cell
        className="font-light"
        index={["normal", "bodyshot", "health", "nocover"]}
        d={d}
        text={format(d.normal.bodyshot.health.nocover)}
      />
      <Cell
        className="text-red-700"
        index={["normal", "headshot", "health", "nocover"]}
        d={d}
        text={format(d.normal.headshot.health.nocover)}
      />
      <Cell
        className="text-orange-400 font-bold"
        index={["critical", "bodyshot", "health", "nocover"]}
        d={d}
        text={format(d.critical.bodyshot.health.nocover)}
      />
      <Cell
        className="text-orange-400 font-extrabold"
        index={["critical", "headshot", "health", "nocover"]}
        d={d}
        text={format(d.critical.headshot.health.nocover)}
      />

      {/* Armor */}
      <RowHead text="Armor C" />
      <Cell
        className="text-blue-600 font-light"
        index={["normal", "bodyshot", "armor", "cover"]}
        d={d}
        text={format(d.normal.bodyshot.armor.cover)}
      />
      <Cell
        className="text-blue-600"
        index={["normal", "headshot", "armor", "cover"]}
        d={d}
        text={format(d.normal.headshot.armor.cover)}
      />
      <Cell
        className="text-blue-600 font-bold"
        index={["critical", "bodyshot", "armor", "cover"]}
        d={d}
        text={format(d.critical.bodyshot.armor.cover)}
      />
      <Cell
        className="text-blue-600 font-extrabold"
        index={["critical", "headshot", "armor", "cover"]}
        d={d}
        text={format(d.critical.headshot.armor.cover)}
      />

      <RowHead text="Armor oC" />
      <Cell
        className="text-blue-600 font-light"
        index={["normal", "bodyshot", "armor", "nocover"]}
        d={d}
        text={format(d.normal.bodyshot.armor.nocover)}
      />
      <Cell
        className="text-blue-600"
        index={["normal", "headshot", "armor", "nocover"]}
        d={d}
        text={format(d.normal.headshot.armor.nocover)}
      />
      <Cell
        className="text-blue-600 font-bold"
        index={["critical", "bodyshot", "armor", "nocover"]}
        d={d}
        text={format(d.critical.bodyshot.armor.nocover)}
      />
      <Cell
        className="text-blue-600 font-extrabold"
        index={["critical", "headshot", "armor", "nocover"]}
        d={d}
        text={format(d.critical.headshot.armor.nocover)}
      />
    </div>
  );
};
