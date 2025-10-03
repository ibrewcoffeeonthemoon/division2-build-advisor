import { useState } from "react";
import { Editor } from "./Editor";
import { Summary } from "./Summary";
import { store } from "@/store/data";

type ItemCardProps<S, C> = {
  section: S;
  category: C;
};

export const ItemCard = <S extends string, C extends string>({
  section,
  category,
}: ItemCardProps<S, C>) => {
  const [open, setOpen] = useState(false);
  const name = store.state()?.[section]?.[category]?.name;
  const attributes = store.state()?.[section]?.[category]?.attributes;

  return (
    <div className="collapse rounded-md border-1 border-base-300 duration-1000">
      <input
        type="checkbox"
        checked={open}
        onChange={(e) => setOpen(e.currentTarget.checked)}
      />
      <div className="collapse-title p-3">
        <div className="grid grid-cols-12 items-center">
          <h2 className="col-span-4 text-lg font-semibold gap-0.5">
            {category}
          </h2>
          <div className="col-span-8 text-lg text-right text-primary font-semibold overflow-hidden overflow-ellipsis text-nowrap">
            {name}
          </div>
        </div>
        {open || <Summary {...{ attributes }} />}
      </div>
      <Editor {...{ section, category }} />
    </div>
  );
};
