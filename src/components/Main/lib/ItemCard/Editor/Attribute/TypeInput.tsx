import { Attribute, AttributeType } from "@/lib/type";
import { store } from "@/store/data";

type Props<S, C> = {
  section: S;
  category: C;
  attribute: Attribute;
  index: number;
};

export const TypeInput = <S extends string, C extends string>({
  section,
  category,
  attribute,
  index,
}: Props<S, C>) => {
  const changeType = store.changeAttributeType();

  return (
    <select
      className="select select-ghost col-span-3"
      defaultValue="Attribute"
      value={attribute.type}
      onChange={(e) =>
        changeType(
          section,
          category,
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
