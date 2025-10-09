import { ATTRIBUTES } from "@/lib/constant/attribute";
import { Amplifier } from "@/lib/type/amplifier";
import { Attribute, AttributeName } from "@/lib/type/attribute";
import { store } from "@/store/edit";

type Props<C, M> = {
  category: C;
  item: M;
  attribute: Attribute;
  index: number;
};

export const AttributeInput = <C extends string, M extends string>({
  category,
  item,
  attribute,
  index,
}: Props<C, M>) => {
  const setName = store.action().attribute.setName;
  const setAmplifier = store.action().attribute.setAmplifier;

  return (
    <select
      className="select select-ghost col-span-7 z-10 text-primary"
      value={attribute.name ?? ""}
      onChange={(e) => {
        setName(category, item, index, e.currentTarget.value as AttributeName);
        setAmplifier(
          category,
          item,
          index,
          e.currentTarget.options[e.currentTarget.selectedIndex].dataset
            .amplifier as Amplifier,
        );
      }}
    >
      {Object.entries(ATTRIBUTES).map(([amplifier, attributes], i) => (
        <optgroup key={i} className="font-bold text-info" label={amplifier}>
          {attributes.map((name, j) => (
            <option
              key={`${i}.${j}`}
              data-amplifier={amplifier}
              className="font-light text-primary"
            >
              {name}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
};
