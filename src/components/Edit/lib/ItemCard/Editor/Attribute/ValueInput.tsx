import { Attribute } from "@/lib/type";
import { round } from "@/lib/utils";
import { store } from "@/store/edit";

// const round = (x: number) => Math.round((x + Number.EPSILON) * 100) / 100;

type Props<C, M> = {
  category: C;
  item: M;
  attribute: Attribute;
  index: number;
};

export const ValueInput = <C extends string, M extends string>({
  category,
  item,
  attribute,
  index,
}: Props<C, M>) => {
  const changeAttributeValue = store.action().attribute.changeAttributeValue;

  return (
    <label className="input input-ghost input-md w-full items-center col-span-2">
      <input
        type="number"
        className="grow text-center text-primary"
        placeholder="> <"
        onFocus={(e) => e.currentTarget.select()}
        value={attribute.value !== null ? round(attribute.value * 100, 2) : ""}
        onChange={(e) => {
          const stringVal = e.currentTarget.value;
          const val = stringVal !== "" ? Number(stringVal) / 100 : null;
          changeAttributeValue(category, item, index, val);
        }}
      />
    </label>
  );
};
