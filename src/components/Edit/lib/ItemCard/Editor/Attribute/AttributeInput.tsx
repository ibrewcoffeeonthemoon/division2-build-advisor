import { Amplifier, Attribute } from "@/lib/type";
import { store } from "@/store/edit";
import { ATTRIBUTES } from "./lib/constant";

type Props<S, C> = {
  section: S;
  item: C;
  attribute: Attribute;
  index: number;
};

export const AttributeInput = <S extends string, C extends string>({
  section,
  item,
  attribute,
  index,
}: Props<S, C>) => {
  const changeAttributeName = store.changeAttributeName();
  const changeAttributeAmplifier = store.changeAttributeAmplifier();

  return (
    <select
      className="select select-ghost col-span-7 z-10 text-primary"
      value={attribute.name ?? ""}
      onChange={(e) => {
        changeAttributeName(section, item, index, e.currentTarget.value);
        changeAttributeAmplifier(
          section,
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
