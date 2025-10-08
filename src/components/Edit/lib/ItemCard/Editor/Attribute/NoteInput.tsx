import { Attribute } from "@/lib/type";
import { store } from "@/store/edit";

type Props<C, M> = {
  category: C;
  item: M;
  attribute: Attribute;
  index: number;
};

export const NoteInput = <C extends string, M extends string>({
  category,
  item,
  attribute,
  index,
}: Props<C, M>) => {
  const changeAttributeNote = store.action().attribute.changeAttributeNote;

  return (
    <label className="input input-ghost w-full col-span-8">
      <input
        type="text"
        className="grow text-primary pl-1"
        placeholder="Note"
        onFocus={(e) => e.currentTarget.select()}
        value={attribute.note}
        onChange={(e) =>
          changeAttributeNote(category, item, index, e.currentTarget.value)
        }
      />
      <button
        className="btn badge badge-ghost badge-xs text-error font-extralight"
        onClick={() => changeAttributeNote(category, item, index, "")}
      >
        X
      </button>
    </label>
  );
};
