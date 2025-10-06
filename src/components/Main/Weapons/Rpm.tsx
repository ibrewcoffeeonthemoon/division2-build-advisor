import { store } from "@/store/data";

type Props<S, C> = {
  section: S;
  item: C;
};

export const Rpm = <S extends string, C extends string>({
  section,
  item,
}: Props<S, C>) => {
  const rpm = store.state()[section][item].rpm;
  const setRpm = store.setRpm();

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
          setRpm(section, item, Number(e.currentTarget.value));
        }}
      />
    </label>
  );
};
