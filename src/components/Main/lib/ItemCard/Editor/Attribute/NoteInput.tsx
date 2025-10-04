import { Attribute } from "@/lib/type";
import { store } from "@/store/data";

type Props<S, C> = {
  section: S;
  category: C;
  attribute: Attribute;
  index: number;
};

export const NoteInput = <S extends string, C extends string>({
  section,
  category,
  attribute,
  index,
}: Props<S, C>) => {
  const changeAttributeNote = store.changeAttributeNote();

  return (
    <label className="input input-ghost w-full col-span-8">
      <span className="text-neutral/50">Note</span>
      <input
        type="text"
        className="grow text-primary pl-1"
        placeholder="<<<"
        onFocus={(e) => e.currentTarget.select()}
        value={attribute.note}
        onChange={(e) =>
          changeAttributeNote(section, category, index, e.currentTarget.value)
        }
      />
    </label>
  );
};
