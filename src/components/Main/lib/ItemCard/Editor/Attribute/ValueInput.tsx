import { Attribute } from "@/lib/type";
import { store } from "@/store/data";

type Props<S, C> = {
  section: S;
  category: C;
  attribute: Attribute;
  index: number;
};

export const ValueInput = <S extends string, C extends string>({
  section,
  category,
  attribute,
  index,
}: Props<S, C>) => {
  const changeAttributeValue = store.changeAttributeValue();

  return (
    <label className="input input-ghost input-md w-full items-center col-span-3">
      <input
        type="number"
        className="grow text-center"
        placeholder="Value"
        onFocus={(e) => e.currentTarget.select()}
        value={attribute.value * 100}
        onChange={(e) =>
          changeAttributeValue(
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
