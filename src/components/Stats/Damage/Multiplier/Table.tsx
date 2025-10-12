import { round } from "@/lib/utils";
import { store } from "@/store/ui/Stats";
import { SectionName, TopicName } from "@/store/ui/Stats/state";

const format = (x: number | null | undefined) => x?.toFixed(2);

const RowHeader = ({ text }: { text: string }) => (
  <span className="col-span-3 font-semibold text-right pr-3">{text}</span>
);

const Cell = ({ amps }: { amps: (() => number | null)[] }) => {
  const rowSum = amps.reduce((sum, amp) => sum + (amp() ?? 0), 1);
  return (
    <>
      <span className="col-span-2 text-info font-semibold text-right pr-2">
        {format(rowSum)}
      </span>
      <span className="col-span-6">
        <span>= 1</span>
        {amps.map((amp, i) => {
          const val = amp();
          if (val) {
            return (
              <span key={i}>
                {" + "}
                <span className="text-info font-semibold">{format(val)}</span>
              </span>
            );
          }
        })}
      </span>
    </>
  );
};

export const Total = ({
  category,
  item,
}: {
  category: SectionName;
  item: TopicName;
}) => {
  const selection = store.state().section.topic.selection[category][item];
  const [n0, n1, n2, n3] = selection ?? [null, null, null, null];
  const x = store.stash()[item]?.dmgMultiplier ?? null;
  const ready = x && n0 && n1 && n2 && n3;

  return (
    ready && (
      <span className="col-span-5 pr-2 text-right text-info font-bold text-xl">
        {round(x[n0][n1][n2][n3], 3)}
      </span>
    )
  );
};

export const Table = ({
  category,
  item,
}: {
  category: SectionName;
  item: TopicName;
}) => {
  const selection = store.state().section.topic.selection[category][item];
  const [n0, n1, n2, n3] = selection ?? [null, null, null, null];
  const m = store.stash()[item]?.ampSums ?? null;
  const ready = m && n0 && n1 && n2 && n3;

  return (
    ready && (
      <div className="w-full grid grid-cols-12">
        <RowHeader text="WD" />
        <Cell amps={[() => m.WDCore, () => m.WDType, () => m.WDTalent]} />

        <RowHeader text="TWD" />
        <Cell amps={[() => m.TWD]} />

        <RowHeader text="AMP1" />
        <Cell amps={[() => m.AMP1]} />

        <RowHeader text="AMP2" />
        <Cell amps={[() => m.AMP2]} />

        <RowHeader text="AMP3" />
        <Cell amps={[() => m.AMP3]} />

        <RowHeader text="CHD/HS" />
        <Cell
          amps={[
            () => (n0 === "critical" ? m.CHD : null),
            () => (n1 === "headshot" ? m.HS : null),
          ]}
        />

        <RowHeader text="DTA/DTH" />
        <Cell
          amps={[
            () => (n2 === "health" ? m.DTH : null),
            () => (n2 === "armor" ? m.DTA : null),
          ]}
        />

        <RowHeader text="DTTOOC" />
        <Cell amps={[() => (n3 === "nocover" ? m.DTTOOC : null)]} />

        <Total {...{ category, item }} />
      </div>
    )
  );
};
