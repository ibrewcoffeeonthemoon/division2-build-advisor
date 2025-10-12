import { store } from "@/store/ui/Stats";
import { SectionName, TopicName } from "@/store/ui/Stats/state";

const RowHeader = ({ text }: { text: string }) => (
  <span className="col-span-3 font-semibold">{text}</span>
);

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
        <span className="col-span-9">
          1{m.WDCore && `+ ${f(m.WDCore)}`}
          {m.WDType && `+ ${f(m.WDType)}`}
          {m.WDTalent && `+ ${f(m.WDTalent)}`}
        </span>

        <RowHeader text="TWD" />
        <span className="col-span-9">1{m.TWD && `+ ${f(m.TWD)}`}</span>

        <RowHeader text="AMP1" />
        <span className="col-span-9">1{m.AMP1 && `+ ${f(m.AMP1)}`}</span>

        <RowHeader text="AMP2" />
        <span className="col-span-9">1{m.AMP2 && `+ ${f(m.AMP2)}`}</span>

        <RowHeader text="AMP3" />
        <span className="col-span-9">1{m.AMP3 && `+ ${f(m.AMP3)}`}</span>

        <RowHeader text="CHD/HS" />
        <span className="col-span-9">
          1{n0 === "critical" && m.CHD && `+ ${f(m.CHD)}`}
          {n1 === "headshot" && m.HS && `+ ${f(m.HS)}`}
        </span>

        <RowHeader text="DTA/DTH" />
        <span className="col-span-9">
          1{n2 === "health" && m.DTH && `+ ${f(m.DTH)}`}
          {n2 === "armor" && m.DTA && `+ ${f(m.DTA)}`}
        </span>

        <RowHeader text="DTTOOC" />
        <span className="col-span-9">
          1{n3 === "nocover" && m.DTTOOC && `+ ${f(m.DTTOOC)}`}
        </span>
      </div>
    )
  );
};
