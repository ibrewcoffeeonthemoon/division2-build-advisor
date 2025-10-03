import { useState } from "react";
import { Editor } from "./Editor";
import { Summary, SummaryProps } from "./Summary";
import { Title } from "./Title";

type ItemCardProps = SummaryProps & {};

export const ItemCard = ({ category, name, attributes }: ItemCardProps) => {
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
      <Editor />
    </div>
  );
};
