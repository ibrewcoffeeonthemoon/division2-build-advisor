import { store } from "@/store/edit";

type Props<C, M> = {
  category: C;
  item: M;
};

export const Input = <C extends string, M extends string>({
  category,
  item,
}: Props<C, M>) => {
  const name = store.state().items[category][item].name;
  const setName = store.setName();

  return (
    <label className="input input-ghost w-full col-span-12">
      <span className="font-bold">Name</span>
      <input
        type="text"
        className="grow text-primary pl-1"
        placeholder="<<<"
        onFocus={(e) => e.currentTarget.select()}
        value={name ?? ""}
        onChange={(e) => {
          setName(category, item, e.currentTarget.value);
        }}
      />
      <button
        className="btn badge badge-ghost badge-xs text-error font-extralight"
        onClick={() => setName(category, item, "")}
      >
        X
      </button>
    </label>
  );
};
