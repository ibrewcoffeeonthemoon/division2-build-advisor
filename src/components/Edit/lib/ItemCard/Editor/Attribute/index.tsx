import { Attribute } from "@/lib/type";
import { stores } from "@/store";
import { TypeInput } from "./TypeInput";
import { AttributeInput } from "./AttributeInput";
import { ValueInput } from "./ValueInput";
import { UptimeInput } from "./UptimeInput";
import { NoteInput } from "./NoteInput";
import { Title } from "./Title";

type Props<C, M> = {
  category: C;
  item: M;
  attribute: Attribute;
  index: number;
};

export const Input = <C extends string, M extends string>({
  category,
  item,
  attribute,
  index,
}: Props<C, M>) => {
  const openIndex =
    stores.ui.Edit.state().section.topic.attributes[category][item].openedIndex;
  const open = openIndex === index;
  const setOpenIndex = stores.ui.Edit.setAttributeOpenIndex();
  const removeAttribute = stores.edit.removeAttribute();

  return (
    <div className="collapse collapse-arrow col-span-12 p-1.5 m-0 border-1 border-base-300 duration-1000">
      <input
        type="checkbox"
        checked={open}
        onChange={() => setOpenIndex(category, item, open ? null : index)}
      />
      <div className="collapse-title p-0 ps-0 pe-0 grid grid-cols-12">
        <Title {...{ open, attribute }} />
      </div>
      <div className="collapse-content !p-0 pb-0 ps-0 pe-0 grid grid-cols-12">
        <AttributeInput {...{ category, item, attribute, index }} />
        <ValueInput {...{ category, item, attribute, index }} />
        <UptimeInput {...{ category, item, attribute, index }} />

        <TypeInput {...{ category, item, attribute, index }} />
        <NoteInput {...{ category, item, attribute, index }} />

        <div className="col-span-12 flex justify-center p-3">
          <button
            tabIndex={0}
            className="
              btn btn-ghost text-error
              flex items-center justify-center
            "
            onClick={() => {
              removeAttribute(category, item, index);
              setOpenIndex(category, item, null);
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};
