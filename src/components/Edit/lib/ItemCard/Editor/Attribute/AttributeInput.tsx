import { Amplifier, Attribute } from "@/lib/type";
import { store } from "@/store/edit";
import { ATTRIBUTES } from "./lib/constant";

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
  const changeAttributeName = store.action().item.changeAttributeName;
  const changeAttributeAmplifier = store.action().item.changeAttributeAmplifier;

  return (
    <select
      className="select select-ghost col-span-7 z-10 text-primary"
      value={attribute.name ?? ""}
      onChange={(e) => {
        changeAttributeName(category, item, index, e.currentTarget.value);
        changeAttributeAmplifier(
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
