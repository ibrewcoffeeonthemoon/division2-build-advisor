import { store } from "@/store/ui/Stats";
import { SectionName, TopicName } from "@/store/ui/Stats/state";

const Row = ({ text }: { text: string }) => {
  return <span className="col-span-12">{text}</span>;
};

type Props<C, M> = {
  category: C;
  item: M;
};
export const Multiplier = <C extends SectionName, M extends TopicName>({
  category,
  item,
}: Props<C, M>) => {
  const open = store.state().section.topic.paragraph.open[category][item];
  const setOpen = store.action().setParagraphOpen;
  const selection = store.state().section.topic.selection[category];
  const [n0, n1, n2, n3] = selection ?? [null, null, null, null];
  const m = store.stash()[item]?.ampSums ?? null;
  const ready = m && n0 && n1 && n2 && n3;
  const f = (x: number | null | undefined) => x?.toFixed(2);

  return (
    ready && (
      <div className="collapse collapse-arrow col-span-12 p-1.5 m-0 border-1 border-base-300 duration-1000">
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen(category, item, e.currentTarget.checked)}
        />
        <div className="collapse-title p-0 ps-0 pe-0 grid grid-cols-12">
          <span className="col-span-12 font-semibold p-1 text-center">
            Multiplier
          </span>
        </div>
        <div className="collapse-content !p-0 pb-0 ps-0 pe-0 grid grid-cols-12">
          <span className="col-span-12">
            WD: 1{m.WDCore && `+ ${f(m.WDCore)}`}
            {m.WDType && `+ ${f(m.WDType)}`}
            {m.WDTalent && `+ ${f(m.WDTalent)}`}
          </span>
          <span className="col-span-12">TWD: 1{m.TWD && `+ ${f(m.TWD)}`}</span>
          <span className="col-span-12">
            AMP1: 1{m.AMP1 && `+ ${f(m.AMP1)}`}
          </span>
          <span className="col-span-12">
            AMP2: 1{m.AMP2 && `+ ${f(m.AMP2)}`}
          </span>
          <span className="col-span-12">
            AMP3: 1{m.AMP3 && `+ ${f(m.AMP3)}`}
          </span>
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
        </div>
      </div>
    )
  );
};
