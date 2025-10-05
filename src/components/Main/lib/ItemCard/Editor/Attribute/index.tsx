import { Attribute } from "@/lib/type";
import { stores } from "@/store";
import { TypeInput } from "./TypeInput";
import { AttributeInput } from "./AttributeInput";
import { ValueInput } from "./ValueInput";
import { UptimeInput } from "./UptimeInput";
import { NoteInput } from "./NoteInput";
import { Title } from "./Title";

type Props<S, C> = {
  section: S;
  item: C;
  attribute: Attribute;
  index: number;
};

export const Input = <S extends string, C extends string>({
  section,
  item,
  attribute,
  index,
}: Props<S, C>) => {
  const openIndex =
    stores.ui.Main.state().section.item.attributes[section][item].openedIndex;
  const open = openIndex === index;
  const setOpenIndex = stores.ui.Main.setAttributeOpenIndex();
  const removeAttribute = stores.data.removeAttribute();

  return (
    <div className="collapse collapse-arrow col-span-12 p-1.5 m-0 border-1 border-base-300 duration-1000">
      <input
        type="checkbox"
        checked={open}
        onChange={() => setOpenIndex(section, item, open ? null : index)}
      />
      <div className="collapse-title p-0 ps-0 pe-0 grid grid-cols-12">
        <Title {...{ open, attribute }} />
      </div>
      <div className="collapse-content !p-0 pb-0 ps-0 pe-0 grid grid-cols-12">
        <AttributeInput {...{ section, item, attribute, index }} />
        <ValueInput {...{ section, item, attribute, index }} />
        <UptimeInput {...{ section, item, attribute, index }} />

        <TypeInput {...{ section, item, attribute, index }} />
        <NoteInput {...{ section, item, attribute, index }} />

        <div className="col-span-12 flex justify-center p-3">
          <button
            tabIndex={0}
            className="
              btn btn-ghost text-error
              flex items-center justify-center
            "
            onClick={() => {
              removeAttribute(section, item, index);
              setOpenIndex(section, item, null);
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};
