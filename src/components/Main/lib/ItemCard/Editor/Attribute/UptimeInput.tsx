import { Attribute } from "@/lib/type";
import { store } from "@/store/data";

type Props<S, C> = {
  section: S;
  category: C;
  attribute: Attribute;
  index: number;
};

export const UptimeInput = <S extends string, C extends string>({
  section,
  category,
  attribute,
  index,
}: Props<S, C>) => {
  const changeAttributeUptime = store.changeAttributeUptime();

  return (
    <label className="input input-ghost input-md w-full items-center col-span-2">
      <input
        type="number"
        className="grow text-center"
        placeholder="Uptime"
        onFocus={(e) => e.currentTarget.select()}
        value={attribute.uptime * 100}
        onChange={(e) =>
          changeAttributeUptime(
            section,
            category,
            index,
            Number(e.currentTarget.value) / 100,
          )
        }
      />
    </label>
  );
};
