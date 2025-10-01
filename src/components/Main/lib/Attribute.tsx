import { ReactNode } from "react";

type Props = {
  name: string;
  field: string;
  val: string;
};
export const ItemAttribute = ({ name, field, val }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div>{name}</div>
      <div>{field}</div>
      <div>{val}</div>
    </div>
  );
};
