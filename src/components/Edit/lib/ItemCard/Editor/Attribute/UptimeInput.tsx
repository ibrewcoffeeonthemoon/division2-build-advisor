import { Attribute } from "@/lib/type";
import { round } from "@/lib/utils";
import { store } from "@/store/edit";

type Props<S, C> = {
  section: S;
  item: C;
  attribute: Attribute;
  index: number;
};

export const UptimeInput = <S extends string, C extends string>({
  section,
  item,
  attribute,
  index,
}: Props<S, C>) => {
  const changeAttributeUptime = store.changeAttributeUptime();

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
          changeAttributeUptime(section, item, index, val);
        }}
      />
    </label>
  );
};
