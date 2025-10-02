import { ReactNode, useState } from "react";
import { Editor } from "./Editor";
import { XMarkIcon } from "@heroicons/react/24/solid";

type TitleProps = {
  category: string;
};

const Title = ({ category }: TitleProps) => {
  return (
    <div className="flex flex-row items-center">
      <XMarkIcon className="size-5" />
      <div className="flex-grow" />
      <h2 className="text-lg font-semibold gap-0.5">{category}</h2>
    </div>
  );
};

type SummaryProps = TitleProps & {
  name: string;
  itemAttrs: ReactNode;
};

const Summary = ({ category, name, itemAttrs }: SummaryProps) => {
  return (
    <div className="flex flex-row">
      <div className="">{itemAttrs}</div>
      <div className="flex-grow" />
      <div className="text-right">
        <h2 className="text-lg font-semibold">{category}</h2>
        <h2 className="text-primary font-semibold">{name}</h2>
      </div>
    </div>
  );
};

type ItemCardProps = SummaryProps & {};

export const ItemCard = ({ category, name, itemAttrs }: ItemCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse bg-accent/20 rounded-md mb-2">
      <input
        type="checkbox"
        checked={open}
        onChange={(e) => setOpen(e.currentTarget.checked)}
      />
      <div className="collapse-title p-3">
        {open ? (
          <Title {...{ category }} />
        ) : (
          <Summary {...{ category, name, itemAttrs }} />
        )}
      </div>
      <Editor />
    </div>
  );
};
