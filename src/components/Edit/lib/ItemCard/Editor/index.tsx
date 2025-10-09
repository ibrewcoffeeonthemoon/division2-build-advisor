import { ReactNode, useState } from "react";
import * as AttributeField from "./Attribute";
import { Header } from "./Header";
import * as NameField from "./Name";
import { store } from "@/store/edit";
import { DEFAULT_ATTRIBUTE } from "@/lib/constant/attribute";

type Props<C, M> = {
  category: C;
  item: M;
  extraInput1?: ReactNode;
  extraInput2?: ReactNode;
};

export const Editor = <C extends string, M extends string>({
  category,
  item,
  extraInput1,
  extraInput2,
}: Props<C, M>) => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const attributes = store.state().items[category][item].attributes;
  const appendAttribute = store.action().attribute.append;

  return (
    <div className="grid grid-cols-12 collapse-content px-3">
      <NameField.Input {...{ category, item }} />
      {extraInput1}
      {extraInput2}
      {attributes.length > 0 && <Header />}
      {attributes?.map((attribute, i) => (
        <AttributeField.Input
          key={i}
          index={i}
          {...{
            category,
            item,
            attribute,
            openedIndex,
            setOpenedIndex,
          }}
        />
      ))}
      <div className="col-span-12 p-2 flex flex-row justify-center">
        <button
          className="btn btn-ghost text-primary"
          onClick={() => {
            appendAttribute(category, item, DEFAULT_ATTRIBUTE);
          }}
        >
          Add Attribute
        </button>
      </div>
    </div>
  );
};
