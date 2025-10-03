import { Attribute } from "@/lib/type";
import { store } from "@/store/data";

type Props<S, C> = {
  section: S;
  category: C;
  attribute: Attribute;
  index: number;
};

export const AttributeInput = <S extends string, C extends string>({
  section,
  category,
  attribute,
  index,
}: Props<S, C>) => {
  const changeAttributeName = store.changeAttributeName();

  return (
    <select
      className="select select-ghost col-span-7 z-10"
      value={attribute.name ?? ""}
      onChange={(e) =>
        changeAttributeName(section, category, index, e.currentTarget.value)
      }
    >
      <option disabled={true}>Attribute</option>
      <option>Weapon Damage</option>
      <option>Critical Hit Chance</option>
      <option>Critical Hit Damage</option>
      <option>Headshot Damage</option>
    </select>
  );
};
