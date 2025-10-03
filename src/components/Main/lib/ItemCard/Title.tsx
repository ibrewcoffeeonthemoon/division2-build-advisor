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
  const name = store.data()?.[section]?.[category]?.name;

  return (
    <div className="grid grid-cols-12">
      <XMarkIcon className="col-span-3 size-5" />
      <div className="col-span-6 text-center text-primary font-semibold">
        {name}
      </div>
      <h2 className="col-span-3 text-right text-lg font-semibold gap-0.5">
        {category}
      </h2>
    </div>
  );
};
