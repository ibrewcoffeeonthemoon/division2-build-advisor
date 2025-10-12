import { calDamage } from "@/lib/damage";
import { Items } from "@/lib/type";
import { round } from "@/lib/utils";
import { stores } from "@/store";
import { Selection } from "@/store/ui/Stats/state";
import { useEffect, useMemo } from "react";

const RowHead = ({ className, text }: { className?: string; text: string }) => (
  <span className={`col-span-3 text-base ${className}`}>{text}</span>
);
const Cell = ({
  className,
  index,
  weapon,
}: {
  className?: string;
  index: Selection<"Damage">;
  weapon: Items<"Weapons">;
}) => {
  const format = (x: number) => round(x, 0).toLocaleString();
  const d = stores.ui.Stats.stash()[weapon].dmgValue;
  const setSelection = stores.ui.Stats.action().setTopicSelection;
  const [n0, n1, n2, n3] = index;
  const text = d ? format(d[n0][n1][n2][n3]) : "";
  const textSize =
    text.length <= 7 ? "text-md" : text.length <= 9 ? "text-sm" : "text-xs";
  return (
    <span
      className={`col-span-3 ${textSize} ${className}`}
      onClick={() => setSelection("Damage", weapon, index)}
    >
      {text}
    </span>
  );
};

export const Spreadsheet = ({ weapon }: { weapon: Items<"Weapons"> }) => {
  const state = stores.edit.state();
  const damageResult = useMemo(() => {
    return calDamage(weapon, state);
  }, [weapon, state]);
  const stashDamageResult = stores.ui.Stats.action().stashDamageResult;
  useEffect(() => {
    stashDamageResult(weapon, damageResult);
  }, [damageResult, weapon, state, stashDamageResult]);

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
        {...{ weapon }}
      />
      <Cell
        className="text-red-700"
        index={["normal", "headshot", "health", "cover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-orange-400 font-bold"
        index={["critical", "bodyshot", "health", "cover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-orange-400 font-extrabold"
        index={["critical", "headshot", "health", "cover"]}
        {...{ weapon }}
      />

      <RowHead text="Health oC" />
      <Cell
        className="font-light"
        index={["normal", "bodyshot", "health", "nocover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-red-700"
        index={["normal", "headshot", "health", "nocover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-orange-400 font-bold"
        index={["critical", "bodyshot", "health", "nocover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-orange-400 font-extrabold"
        index={["critical", "headshot", "health", "nocover"]}
        {...{ weapon }}
      />

      {/* Armor */}
      <RowHead text="Armor C" />
      <Cell
        className="text-blue-600 font-light"
        index={["normal", "bodyshot", "armor", "cover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-blue-600"
        index={["normal", "headshot", "armor", "cover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-blue-600 font-bold"
        index={["critical", "bodyshot", "armor", "cover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-blue-600 font-extrabold"
        index={["critical", "headshot", "armor", "cover"]}
        {...{ weapon }}
      />

      <RowHead text="Armor oC" />
      <Cell
        className="text-blue-600 font-light"
        index={["normal", "bodyshot", "armor", "nocover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-blue-600"
        index={["normal", "headshot", "armor", "nocover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-blue-600 font-bold"
        index={["critical", "bodyshot", "armor", "nocover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-blue-600 font-extrabold"
        index={["critical", "headshot", "armor", "nocover"]}
        {...{ weapon }}
      />
    </div>
  );
};
