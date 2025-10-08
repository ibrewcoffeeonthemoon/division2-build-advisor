import { Attribute, AttributeType } from "@/lib/type";
import { store } from "@/store/edit";

type Props<C, M> = {
  category: C;
  item: M;
  attribute: Attribute;
  index: number;
};

export const TypeInput = <C extends string, M extends string>({
  category,
  item,
  attribute,
  index,
}: Props<C, M>) => {
  const changeType = store.changeAttributeType();

  return (
    <select
      className="select select-ghost col-span-4 text-primary"
      value={attribute.type}
      onChange={(e) =>
        changeType(
          category,
          item,
          index,
          e.currentTarget.value as AttributeType,
        )
      }
    >
      <option disabled={true}>Type</option>
      <option>Attribute</option>
      <option>Mod</option>
      <option>Talent</option>
    </select>
  );
};
