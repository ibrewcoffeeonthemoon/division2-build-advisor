import { store } from "@/store/edit";

type Props<C, M> = {
  category: C;
  item: M;
};

export const Rpm = <C extends string, M extends string>({
  category,
  item,
}: Props<C, M>) => {
  const rpm = store.state().items[category][item].rpm;
  const setRpm = store.action().item.setRpm;

  return (
    <label className="input input-ghost w-full col-span-5">
      <span className="font-semibold">RPM</span>
      <input
        type="number"
        className="grow text-primary pl-1"
        placeholder="<<<"
        onFocus={(e) => e.currentTarget.select()}
        value={rpm ?? ""}
        onChange={(e) => {
          const stringVal = e.currentTarget.value;
          const val = stringVal !== "" ? Number(stringVal) : null;
          setRpm(category, item, val);
        }}
      />
      <button
        className="btn badge badge-ghost badge-xs text-error font-extralight"
        onClick={() => setRpm(category, item, null)}
      >
        X
      </button>
    </label>
  );
};
