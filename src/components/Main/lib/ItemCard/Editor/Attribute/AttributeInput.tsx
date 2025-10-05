import { Amplifier, Attribute } from "@/lib/type";
import { store } from "@/store/data";
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

  return (
    <select
      className="select select-ghost col-span-7 z-10 text-primary"
      value={attribute.name ?? ""}
      onChange={(e) => {
        var opt = e.currentTarget.options[e.currentTarget.selectedIndex];
        const amplifier = opt.dataset.amplifier || "None";
        console.log(amplifier);
        changeAttributeName(section, item, index, e.currentTarget.value);
      }}
    >
      {Object.entries(ATTRIBUTES).map(([amplifier, attributes], i) => (
        <>
          <option key={i} disabled={true} className="font-bold">
            Amplifier <span className="text-info">{amplifier}</span>
          </option>
          {attributes.map((name, j) => (
            <option
              key={`${i}.${j}`}
              data-amplifier={amplifier}
              className="font-light text-primary"
            >
              {name}
            </option>
          ))}
        </>
      ))}
    </select>
  );
};
