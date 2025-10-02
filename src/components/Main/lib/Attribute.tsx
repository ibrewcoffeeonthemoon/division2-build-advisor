import { ReactNode } from "react";

export type Attribute = {
  type: "Attribute" | "Mod" | "Talent";
  name: string;
  value: number;
  uptime: number;
};

type Props = {
  icon: ReactNode;
  field: string;
  val: string;
};

export const ItemAttribute = ({ icon, field, val }: Props) => {
  return (
    <tr className="">
      <td className="w-5 h-5">{icon}</td>
      <td className="pl-2">{val}</td>
      <td className="pl-2">{field}</td>
    </tr>
  );
};
