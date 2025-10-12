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
  const [n0, n1, n2, n3] = selection ?? ["", "", "", ""];

  return (
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
        <Row text={n0} />
        <Row text={n1} />
        <Row text={n2} />
        <Row text={n3} />
      </div>
    </div>
  );
};
