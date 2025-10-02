import { ReactNode, useState } from "react";

type Props = {
  category: string;
  name: string;
  itemAttrs: ReactNode;
};

export const ItemCard = ({ category, name, itemAttrs }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="collapse bg-accent/20 rounded-md mb-2">
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen(e.currentTarget.checked)}
        />
        <div className="collapse-title p-3">
          <div
            className="
              flex flex-row
            "
          >
            {open ? (
              <>
                <div className="flex-grow" />
                <div className="text-right">
                  <h2 className="card-title">{category}</h2>
                  <h2>{name}</h2>
                </div>
              </>
            ) : (
              <>
                <div className="">{itemAttrs}</div>
                <div className="flex-grow" />
                <div className="text-right">
                  <h2 className="card-title">{category}</h2>
                  <h2>{name}</h2>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="collapse-content">
          <div className="">Attribute editor here.</div>
        </div>
      </div>
    </>
  );
};
