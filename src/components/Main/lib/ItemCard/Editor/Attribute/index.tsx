import { Attribute } from "@/lib/type";
import { store } from "@/store/data";
import { TypeInput } from "./TypeInput";
import { AttributeInput } from "./AttributeInput";

export const Header = () => {
  const headers = [
    ["Attribute", "col-span-7"],
    ["Value %", "col-span-3"],
    ["Uptime %", "col-span-2"],
  ];
  return (
    <>
      {headers.map(([header, style], i) => (
        <span
          key={i}
          className={`${style} pt-2 size-full text-center font-bold`}
        >
          {header}
        </span>
      ))}
    </>
  );
};

type Props<S, C> = {
  section: S;
  category: C;
  attribute: Attribute;
  index: number;
};

export const Input = <S extends string, C extends string>({
  section,
  category,
  attribute,
  index,
}: Props<S, C>) => {
  const removeAttribute = store.removeAttribute();

  return (
    <div
      tabIndex={0}
      className="collapse col-span-12 p-1.5 m-0 overflow-visible border-1 border-base-300 duration-1000"
    >
      <div className="collapse-title p-0 ps-0 pe-0">
        <div className="col-span-12 grid grid-cols-12 items-center">
          <AttributeInput />
          <label className="input input-ghost input-md w-full items-center col-span-3">
            <input
              type="number"
              className="grow text-center"
              placeholder="Value"
              onFocus={(e) => e.currentTarget.select()}
              defaultValue={0.0}
            />
          </label>
          <label className="input input-ghost input-md w-full items-center col-span-2">
            <input
              type="number"
              className="grow text-center"
              placeholder="Uptime"
              onFocus={(e) => e.currentTarget.select()}
              defaultValue={1.0}
            />
          </label>
        </div>
      </div>
      <div className="collapse-content !p-0 pb-0 ps-0 pe-0 grid grid-cols-12">
        <TypeInput {...{ section, category, attribute, index }} />
        <label className="input input-ghost w-full col-span-9">
          Name
          <input
            type="text"
            className="grow"
            placeholder="Remarks"
            onFocus={(e) => e.currentTarget.select()}
            defaultValue=""
          />
        </label>
        <div className="col-span-12 flex justify-center p-3">
          <button
            tabIndex={0}
            className="
              btn btn-error 
              flex items-center justify-center
            "
            onClick={() => removeAttribute(section, category, index)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};
