import { Attribute } from "@/lib/type/attribute";
import { round } from "@/lib/utils";
import { store } from "@/store/edit";

type Props<C, M> = {
  category: C;
  item: M;
  attribute: Attribute;
  index: number;
};

export const UptimeInput = <C extends string, M extends string>({
  category,
  item,
  attribute,
  index,
}: Props<C, M>) => {
  const setUptime = store.action().attribute.setUptime;

  return (
    <label className="input input-ghost input-md w-full items-center col-span-2">
      <input
        type="number"
        className="grow text-center text-primary"
        placeholder="Uptime"
        onFocus={(e) => e.currentTarget.select()}
        value={
          attribute.uptime !== null ? round(attribute.uptime * 100, 2) : ""
        }
        onChange={(e) => {
          const stringVal = e.currentTarget.value;
          const val = stringVal !== "" ? Number(stringVal) / 100 : null;
          setUptime(category, item, index, val);
        }}
      />
    </label>
  );
};
