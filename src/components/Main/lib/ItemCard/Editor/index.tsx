import { useState } from "react";
import * as AttributeField from "./Attribute";
import { Header } from "./Header";
import * as NameField from "./Name";
import { DEFAULT_ATTRIBUTE } from "@/lib/type";
import { store } from "@/store/data";

type Props<S, C> = {
  section: S;
  category: C;
};

export const Editor = <S extends string, C extends string>({
  section,
  category,
}: Props<S, C>) => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const attributes = store.state()?.[section]?.[category]?.attributes;
  const appendAttribute = store.appendAttribute();

  return (
    <div className="grid grid-cols-12 collapse-content px-3">
      <NameField.Input {...{ section, category }} />
      <Header />
      {attributes?.map((attribute, i) => (
        <AttributeField.Input
          key={i}
          index={i}
          {...{ section, category, attribute, openedIndex, setOpenedIndex }}
        />
      ))}
      <div className="col-span-12 p-2 flex flex-row justify-center">
        <button
          className="btn btn-primary btn-outline"
          onClick={() => {
            appendAttribute(section, category, DEFAULT_ATTRIBUTE);
          }}
        >
          Add Attribute
        </button>
      </div>
    </div>
  );
};
