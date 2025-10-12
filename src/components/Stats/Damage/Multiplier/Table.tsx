import { store } from "@/store/ui/Stats";
import { SectionName, TopicName } from "@/store/ui/Stats/state";

const RowHeader = ({ text }: { text: string }) => (
  <span className="col-span-3 font-semibold">{text}</span>
);

const Cell = ({ amps }: { amps: (() => number | null)[] }) => {
  const format = (x: number | null | undefined) => x?.toFixed(2);

  let text = "1";
  amps.forEach((amp) => {
    const val = amp();
    text += val ? ` + ${format(val)}` : "";
  });

  return <span className="col-span-9">{text}</span>;
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
  const f = (x: number | null | undefined) => x?.toFixed(2);

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
      </div>
    )
  );
};
