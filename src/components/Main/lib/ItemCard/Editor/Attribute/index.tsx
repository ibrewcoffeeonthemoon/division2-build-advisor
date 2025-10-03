import { Attribute } from "@/lib/type";
import { store } from "@/store/data";
import { TypeInput } from "./TypeInput";
import { AttributeInput } from "./AttributeInput";
import { ValueInput } from "./ValueInput";
import { UptimeInput } from "./UptimeInput";
import { NoteInput } from "./NoteInput";
import { Title } from "./Title";
import { useState } from "react";

type Props<S, C> = {
  section: S;
  category: C;
  attribute: Attribute;
  index: number;
  openedIndex: number | null;
  setOpenedIndex: (val: number | null) => void;
};

export const Input = <S extends string, C extends string>({
  section,
  category,
  attribute,
  index,
  openedIndex,
  setOpenedIndex,
}: Props<S, C>) => {
  const open = index === openedIndex;
  const removeAttribute = store.removeAttribute();

  return (
    <div className="collapse col-span-12 p-1.5 m-0 overflow-visible border-1 border-base-300 duration-1000">
      <input
        type="checkbox"
        checked={open}
        onClick={() => setOpenedIndex(openedIndex === index ? null : index)}
      />
      <div className="collapse-title p-0 ps-0 pe-0 grid grid-cols-12">
        <Title {...{ open, attribute }} />
      </div>
      <div className="collapse-content !p-0 pb-0 ps-0 pe-0 grid grid-cols-12">
        <AttributeInput {...{ section, category, attribute, index }} />
        <ValueInput {...{ section, category, attribute, index }} />
        <UptimeInput {...{ section, category, attribute, index }} />

        <TypeInput {...{ section, category, attribute, index }} />
        <NoteInput {...{ section, category, attribute, index }} />

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
