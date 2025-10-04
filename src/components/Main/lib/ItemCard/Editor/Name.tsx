import { store } from "@/store/data";

type Props<S, C> = {
  section: S;
  item: C;
};

export const Input = <S extends string, C extends string>({
  section,
  item,
}: Props<S, C>) => {
  const name = store.state()?.[section]?.[item]?.name;
  const setName = store.setName();

  return (
    <label className="input input-neutral w-full col-span-12">
      <span className="font-bold">Name</span>
      <input
        type="text"
        className="grow text-primary pl-1"
        placeholder="<<<"
        onFocus={(e) => e.currentTarget.select()}
        value={name ?? ""}
        onChange={(e) => {
          setName(section, item, e.currentTarget.value);
        }}
      />
      <span className="badge badge-ghost badge-xs">Required</span>
    </label>
  );
};
