import { store } from "@/store/ui/Stats";
import { ReactNode } from "react";

type ItemCardProps<S, M> = {
  section: S;
  item: M;
  children: ReactNode;
};

export const ItemCard = <S extends string, M extends string>({
  section,
  item,
  children,
}: ItemCardProps<S, M>) => {
  const open = store.state().section.item.open[section][item];
  const setOpen = store.setItemOpen();

  return (
    <div className="collapse collapse-arrow rounded-md border-1 border-base-300 duration-1000">
      <input
        type="checkbox"
        checked={open}
        onChange={(e) => setOpen(section, item, e.currentTarget.checked)}
      />
      <div className="collapse-title p-3">
        <div className="grid grid-cols-12 items-center">
          <h2 className="col-span-4 font-semibold gap-0.5">{item}</h2>
        </div>
      </div>
      <div className="collapse-content grid grid-cols-12 px-3">{children}</div>
    </div>
  );
};
