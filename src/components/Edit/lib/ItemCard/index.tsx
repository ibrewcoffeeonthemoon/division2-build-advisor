import { SectionName, TopicName } from "@/store/ui/Edit/state";
import { Editor } from "./Editor";
import { Summary } from "./Summary";
import { stores } from "@/store";
import { ReactNode } from "react";

type ItemCardProps<C, M> = {
  category: C;
  item: M;
  damageDashboard?: ReactNode;
  extraInput1?: ReactNode;
  extraInput2?: ReactNode;
};

export const ItemCard = <C extends SectionName, M extends TopicName<C>>({
  category,
  item,
  damageDashboard,
  extraInput1,
  extraInput2,
}: ItemCardProps<C, M>) => {
  const open = stores.ui.Edit.state().section.topic.open[category][item];
  const setOpen = stores.ui.Edit.action().setTopicOpen;

  const name = stores.edit.state().items[category][item].name;
  const attributes = stores.edit.state().items[category][item].attributes;

  return (
    <div className="collapse collapse-arrow rounded-md border-1 border-base-300 duration-1000">
      <input
        type="checkbox"
        checked={open}
        onChange={(e) => setOpen(category, item, e.currentTarget.checked)}
      />
      <div className="collapse-title p-3">
        <div className="grid grid-cols-12 items-center">
          <h2 className="col-span-4 font-semibold gap-0.5">{item}</h2>
          <div className="col-span-7 text-info font-semibold overflow-hidden overflow-ellipsis text-nowrap">
            {name}
          </div>
        </div>
        {category === "Weapons" && damageDashboard}
        {open || <Summary {...{ attributes }} />}
      </div>
      <Editor {...{ category, item, extraInput1, extraInput2 }} />
    </div>
  );
};
