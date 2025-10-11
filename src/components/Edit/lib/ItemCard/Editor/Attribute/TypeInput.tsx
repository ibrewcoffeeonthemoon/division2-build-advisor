import { Attribute, AttributeType } from "@/lib/type/attribute";
import { store } from "@/store/edit";
import { SectionName, TopicName } from "@/store/edit/state";

type Props<C, M> = {
  category: C;
  item: M;
  attribute: Attribute;
  index: number;
};

export const TypeInput = <C extends SectionName, M extends TopicName<C>>({
  category,
  item,
  attribute,
  index,
}: Props<C, M>) => {
  const setType = store.action().attribute.setType;

  return (
    <select
      className="select select-ghost col-span-4 text-primary"
      value={attribute.type ?? ""}
      onChange={(e) =>
        setType(category, item, index, e.currentTarget.value as AttributeType)
      }
    >
      <option disabled={true}>Type</option>
      <option>Attribute</option>
      <option>Mod</option>
      <option>Talent</option>
      <option value="">None</option>
    </select>
  );
};
