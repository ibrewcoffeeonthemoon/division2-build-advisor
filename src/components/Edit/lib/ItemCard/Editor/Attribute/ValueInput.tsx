import { Attribute } from "@/lib/type";
import { round } from "@/lib/utils";
import { store } from "@/store/data";

// const round = (x: number) => Math.round((x + Number.EPSILON) * 100) / 100;

type Props<S, C> = {
  section: S;
  item: C;
  attribute: Attribute;
  index: number;
};

export const ValueInput = <S extends string, C extends string>({
  section,
  item,
  attribute,
  index,
}: Props<S, C>) => {
  const changeAttributeValue = store.changeAttributeValue();

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
          changeAttributeValue(section, item, index, val);
        }}
      />
    </label>
  );
};
