import { calDamage } from "@/lib/damage";
import { DmgRecord } from "@/lib/damage/dmg/record";
import { Items } from "@/lib/type";
import { round } from "@/lib/utils";
import { stores } from "@/store";
import { Selection } from "@/store/ui/Stats/state";

const RowHead = ({ className, text }: { className?: string; text: string }) => (
  <span className={`col-span-3 text-base ${className}`}>{text}</span>
);
const Cell = ({
  className,
  index,
  d,
}: {
  className?: string;
  index: Selection;
  d: DmgRecord<number>;
}) => {
  const setSelection = stores.ui.Stats.action().setTopicSelection;
  const format = (x: number) => round(x, 0).toLocaleString();
  const [n0, n1, n2, n3] = index;
  const text = format(d[n0][n1][n2][n3]);
  const textSize =
    text.length <= 7 ? "text-md" : text.length <= 9 ? "text-sm" : "text-xs";
  return (
    <span
      className={`col-span-3 ${textSize} ${className}`}
      onClick={() => setSelection("Damage", index)}
    >
      {text}
    </span>
  );
};

export const Spreadsheet = ({ weapon }: { weapon: Items<"Weapons"> }) => {
  const { dmgRecord: d } = calDamage(weapon, stores.edit.state());

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
      />
      <Cell
        className="text-red-700"
        index={["normal", "headshot", "health", "cover"]}
        d={d}
      />
      <Cell
        className="text-orange-400 font-bold"
        index={["critical", "bodyshot", "health", "cover"]}
        d={d}
      />
      <Cell
        className="text-orange-400 font-extrabold"
        index={["critical", "headshot", "health", "cover"]}
        d={d}
      />

      <RowHead text="Health oC" />
      <Cell
        className="font-light"
        index={["normal", "bodyshot", "health", "nocover"]}
        d={d}
      />
      <Cell
        className="text-red-700"
        index={["normal", "headshot", "health", "nocover"]}
        d={d}
      />
      <Cell
        className="text-orange-400 font-bold"
        index={["critical", "bodyshot", "health", "nocover"]}
        d={d}
      />
      <Cell
        className="text-orange-400 font-extrabold"
        index={["critical", "headshot", "health", "nocover"]}
        d={d}
      />

      {/* Armor */}
      <RowHead text="Armor C" />
      <Cell
        className="text-blue-600 font-light"
        index={["normal", "bodyshot", "armor", "cover"]}
        d={d}
      />
      <Cell
        className="text-blue-600"
        index={["normal", "headshot", "armor", "cover"]}
        d={d}
      />
      <Cell
        className="text-blue-600 font-bold"
        index={["critical", "bodyshot", "armor", "cover"]}
        d={d}
      />
      <Cell
        className="text-blue-600 font-extrabold"
        index={["critical", "headshot", "armor", "cover"]}
        d={d}
      />

      <RowHead text="Armor oC" />
      <Cell
        className="text-blue-600 font-light"
        index={["normal", "bodyshot", "armor", "nocover"]}
        d={d}
      />
      <Cell
        className="text-blue-600"
        index={["normal", "headshot", "armor", "nocover"]}
        d={d}
      />
      <Cell
        className="text-blue-600 font-bold"
        index={["critical", "bodyshot", "armor", "nocover"]}
        d={d}
      />
      <Cell
        className="text-blue-600 font-extrabold"
        index={["critical", "headshot", "armor", "nocover"]}
        d={d}
      />
    </div>
  );
};
