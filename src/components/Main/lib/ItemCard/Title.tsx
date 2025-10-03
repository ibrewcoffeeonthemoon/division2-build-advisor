import { store } from "@/store/data";

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
      <h2 className="col-span-4 text-lg font-semibold gap-0.5">{category}</h2>
      <div className="col-span-8 text-lg text-right text-primary font-semibold overflow-hidden overflow-ellipsis text-nowrap">
        {name}
      </div>
    </div>
  );
};
