import { ReactNode } from "react";

type Props = {
  itemAttrs: ReactNode;
  itemDesc: ReactNode;
};

export const ItemCard = ({ itemAttrs, itemDesc }: Props) => {
  return (
    <div
      className="
        card card-sm bg-accent/20 shadow-sm
        m-1 flex-row
        text-xl font-bold
      "
    >
      <div className="card-body">{itemAttrs}</div>
      <div className="card-body flex-none">{itemDesc}</div>
    </div>
  );
};
