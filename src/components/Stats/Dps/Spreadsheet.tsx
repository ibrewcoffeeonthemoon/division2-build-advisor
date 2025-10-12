import { calDamage } from "@/lib/damage";
import { Items } from "@/lib/type";
import { round } from "@/lib/utils";
import { stores } from "@/store";
import { Selection } from "@/store/ui/Stats/state";
import { useEffect, useMemo } from "react";

const ColHead = ({ className, text }: { className?: string; text: string }) => (
  <span className={`col-span-6 text-base ${className}`}>{text}</span>
);
const RowHead = ({ className, text }: { className?: string; text: string }) => (
  <span className={`col-span-3 text-base ${className}`}>{text}</span>
);

const Cell = ({
  className,
  index,
  weapon,
}: {
  className?: string;
  index: Selection<"Dps">;
  weapon: Items<"Weapons">;
}) => {
  const format = (x: number) => round(x, 0).toLocaleString();
  const d = stores.ui.Stats.stash()[weapon].dpsValue;
  const setSelection = stores.ui.Stats.action().setTopicSelection;
  const [, n1, n2, n3] = index;
  const text = d ? format(d[n1][n2][n3]) : "";
  const textSize =
    text.length <= 7 ? "text-md" : text.length <= 9 ? "text-sm" : "text-xs";
  return (
    <span
      className={`col-span-6 ${textSize} ${className}`}
      onClick={() => setSelection("Dps", weapon, index)}
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
      <ColHead className="col-start-4" text="Body" />
      <ColHead className="" text="Head" />

      {/* Health */}
      <RowHead className="col-span-2" text="Health C" />
      <Cell
        className="font-light"
        index={[null, "bodyshot", "health", "cover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-red-700"
        index={[null, "headshot", "health", "cover"]}
        {...{ weapon }}
      />

      <RowHead text="Health oC" />
      <Cell
        className="font-light"
        index={[null, "bodyshot", "health", "nocover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-red-700"
        index={[null, "headshot", "health", "nocover"]}
        {...{ weapon }}
      />

      {/* Armor */}
      <RowHead text="Armor C" />
      <Cell
        className="text-blue-600 font-light"
        index={[null, "bodyshot", "armor", "cover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-blue-600"
        index={[null, "headshot", "armor", "cover"]}
        {...{ weapon }}
      />

      <RowHead text="Armor oC" />
      <Cell
        className="text-blue-600 font-light"
        index={[null, "bodyshot", "armor", "nocover"]}
        {...{ weapon }}
      />
      <Cell
        className="text-blue-600"
        index={[null, "headshot", "armor", "nocover"]}
        {...{ weapon }}
      />
    </div>
  );
};
