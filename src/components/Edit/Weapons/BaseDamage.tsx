import { store } from "@/store/edit";

type Props<C, M> = {
  category: C;
  item: M;
};

export const BaseDamage = <C extends string, M extends string>({
  category,
  item,
}: Props<C, M>) => {
  const baseDamage = store.state().items[category][item].baseDamage;
  const setBaseDamage = store.action().item.setBaseDamage;

  return (
    <label className="input input-ghost w-full col-span-7">
      <span className="font-semibold">Base DMG</span>
      <input
        type="number"
        className="grow text-primary pl-1"
        placeholder="<<<"
        onFocus={(e) => e.currentTarget.select()}
        value={baseDamage ?? ""}
        onChange={(e) => {
          const stringVal = e.currentTarget.value;
          const val = stringVal !== "" ? Number(stringVal) : null;
          setBaseDamage(category, item, val);
        }}
      />
      <button
        className="btn badge badge-ghost badge-xs text-error font-extralight"
        onClick={() => setBaseDamage(category, item, null)}
      >
        X
      </button>
    </label>
  );
};
