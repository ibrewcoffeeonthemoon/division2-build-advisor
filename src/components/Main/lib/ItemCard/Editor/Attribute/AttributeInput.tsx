import { Attribute } from "@/lib/type";
import { store } from "@/store/data";
import { ATTRIBUTES, OTHER_ATTRIBUTES } from "./lib/constant";

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
      onChange={(e) =>
        changeAttributeName(section, item, index, e.currentTarget.value)
      }
    >
      {Object.entries(ATTRIBUTES).map(([amp, attributes], i) => (
        <>
          <option key={i} disabled={true} className="font-bold">
            Amplifier: <span className="text-info">{amp}</span>
          </option>
          {attributes.map((name, j) => (
            <option key={`${i}.${j}`} className="font-light text-primary">
              {name}
            </option>
          ))}
        </>
      ))}
      <option disabled={true} className="font-bold">
        Amplifier: <span className="text-info">None</span>
      </option>
      {OTHER_ATTRIBUTES.map((name, i) => (
        <>
          <option key={`_${i}`} className="">
            {name}
          </option>
        </>
      ))}
    </select>
  );
};
