import { Editor } from "./Editor";
import { Summary } from "./Summary";
import { stores } from "@/store";

type ItemCardProps<S, C> = {
  section: S;
  category: C;
};

export const ItemCard = <S extends string, C extends string>({
  section,
  category,
}: ItemCardProps<S, C>) => {
  const open = stores.ui.Main.state().section.category.open[section][category];
  const setOpen = stores.ui.Main.setCategoryOpen();

  const name = stores.data.state()[section][category].name;
  const attributes = stores.data.state()[section][category].attributes;

  return (
    <div className="collapse collapse-arrow rounded-md border-1 border-base-300 duration-1000">
      <input
        type="checkbox"
        checked={open}
        onChange={(e) => setOpen(section, category, e.currentTarget.checked)}
      />
      <div className="collapse-title p-3">
        <div className="grid grid-cols-12 items-center">
          <h2 className="col-span-4 font-semibold gap-0.5">{category}</h2>
          <div className="col-span-7 text-info font-semibold overflow-hidden overflow-ellipsis text-nowrap">
            {name}
          </div>
        </div>
        {open || <Summary {...{ attributes }} />}
      </div>
      <Editor {...{ section, category }} />
    </div>
  );
};
