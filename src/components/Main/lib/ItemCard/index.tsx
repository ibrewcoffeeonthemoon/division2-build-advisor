import { useState } from "react";
import { Editor } from "./Editor";
import { Summary } from "./Summary";
import { Title } from "./Title";
import { Attribute } from "@/lib/type";

type ItemCardProps<S, C> = {
  section: S;
  category: C;
  name: string;
  attributes: Attribute[];
};

export const ItemCard = <S extends string, C extends string>({
  section,
  category,
  name,
  attributes,
}: ItemCardProps<S, C>) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse rounded-md border-1 border-base-300 duration-1000">
      <input
        type="checkbox"
        checked={open}
        onChange={(e) => setOpen(e.currentTarget.checked)}
      />
      <div className="collapse-title p-3">
        {open ? (
          <Title {...{ category }} />
        ) : (
          <Summary {...{ category, name, attributes }} />
        )}
      </div>
      <Editor {...{ section, category }} />
    </div>
  );
};
