import { store } from "@/store/ui/Stats";
import { SectionName, TopicName } from "@/store/ui/Stats/state";

export const Table = ({
  category,
  item,
}: {
  category: SectionName;
  item: TopicName;
}) => {
  const selection = store.state().section.topic.selection[category];
  const [n0, n1, n2, n3] = selection ?? [null, null, null, null];
  const m = store.stash()[item]?.ampSums ?? null;
  const ready = m && n0 && n1 && n2 && n3;
  const f = (x: number | null | undefined) => x?.toFixed(2);

  return (
    ready && (
      <>
        <span className="col-span-12">
          WD: 1{m.WDCore && `+ ${f(m.WDCore)}`}
          {m.WDType && `+ ${f(m.WDType)}`}
          {m.WDTalent && `+ ${f(m.WDTalent)}`}
        </span>
        <span className="col-span-12">TWD: 1{m.TWD && `+ ${f(m.TWD)}`}</span>
        <span className="col-span-12">AMP1: 1{m.AMP1 && `+ ${f(m.AMP1)}`}</span>
        <span className="col-span-12">AMP2: 1{m.AMP2 && `+ ${f(m.AMP2)}`}</span>
        <span className="col-span-12">AMP3: 1{m.AMP3 && `+ ${f(m.AMP3)}`}</span>
        <span className="col-span-12">
          CHD/HS: 1{n0 === "critical" && m.CHD && `+ ${f(m.CHD)}`}
          {n1 === "headshot" && m.HS && `+ ${f(m.HS)}`}
        </span>
        <span className="col-span-12">
          DTA/DTH: 1{n2 === "health" && m.DTH && `+ ${f(m.DTH)}`}
          {n2 === "armor" && m.DTA && `+ ${f(m.DTA)}`}
        </span>
        <span className="col-span-12">
          DTTOOC: 1{n3 === "nocover" && m.DTTOOC && `+ ${f(m.DTTOOC)}`}
        </span>
      </>
    )
  );
};
