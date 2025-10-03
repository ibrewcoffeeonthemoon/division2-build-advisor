import { store } from "@/store/data";
import { XMarkIcon } from "@heroicons/react/24/solid";

export type TitleProps<S, C> = {
  section: S;
  category: C;
};

export const Title = <S extends string, C extends string>({
  section,
  category,
}: TitleProps<S, C>) => {
  const name = store.state()?.[section]?.[category]?.name;

  return (
    <div className="grid grid-cols-12 items-center">
      <XMarkIcon className="col-span-1 size-5" />
      <div className="col-span-7 text-primary font-semibold overflow-hidden overflow-ellipsis text-nowrap">
        {name}
      </div>
      <h2 className="col-span-4 text-right text-lg font-semibold gap-0.5">
        {category}
      </h2>
    </div>
  );
};
