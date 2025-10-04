import { useState } from "react";
import * as AttributeField from "./Attribute";
import { Header } from "./Header";
import * as NameField from "./Name";
import { DEFAULT_ATTRIBUTE } from "@/lib/type";
import { store } from "@/store/data";

type Props<S, C> = {
  section: S;
  item: C;
};

export const Editor = <S extends string, C extends string>({
  section,
  item,
}: Props<S, C>) => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const attributes = store.state()?.[section]?.[item]?.attributes;
  const appendAttribute = store.appendAttribute();

  return (
    <div className="grid grid-cols-12 collapse-content px-3">
      <NameField.Input {...{ section, item }} />
      <Header />
      {attributes?.map((attribute, i) => (
        <AttributeField.Input
          key={i}
          index={i}
          {...{ section, item, attribute, openedIndex, setOpenedIndex }}
        />
      ))}
      <div className="col-span-12 p-2 flex flex-row justify-center">
        <button
          className="btn btn-ghost text-primary"
          onClick={() => {
            appendAttribute(section, item, DEFAULT_ATTRIBUTE);
          }}
        >
          Add Attribute
        </button>
      </div>
    </div>
  );
};
