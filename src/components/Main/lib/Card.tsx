import { ReactNode, useState } from "react";

type Props = {
  itemAttrs: ReactNode;
  itemDesc: ReactNode;
};

export const ItemCard = ({ itemAttrs, itemDesc }: Props) => {
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
                <div className="">{itemDesc}</div>
              </>
            ) : (
              <>
                <div className="">{itemAttrs}</div>
                <div className="flex-grow" />
                <div className="">{itemDesc}</div>
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
