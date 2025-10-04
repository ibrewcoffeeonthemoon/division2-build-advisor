import { Attribute } from "@/lib/type";
import { store } from "@/store/data";

type Props<S, C> = {
  section: S;
  item: C;
  attribute: Attribute;
  index: number;
};

export const NoteInput = <S extends string, C extends string>({
  section,
  item,
  attribute,
  index,
}: Props<S, C>) => {
  const changeAttributeNote = store.changeAttributeNote();

  return (
    <label className="input input-ghost w-full col-span-7">
      <input
        type="text"
        className="grow text-primary pl-1"
        placeholder="Note"
        onFocus={(e) => e.currentTarget.select()}
        value={attribute.note}
        onChange={(e) =>
          changeAttributeNote(section, item, index, e.currentTarget.value)
        }
      />
    </label>
  );
};
