import { Attribute, AttributeType } from "@/lib/type";
import {
  StopCircleIcon,
  Cog8ToothIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";
import { JSX } from "react";

export type SummaryProps<C> = {
  category: C;
  name: string;
  attributes: Attribute[];
};

export const Summary = <C extends string>({
  category,
  name,
  attributes,
}: SummaryProps<C>) => {
  const icons: Record<AttributeType, JSX.Element> = {
    Attribute: <StopCircleIcon className="w-5 h-5 text-red-500" />,
    Mod: <Cog8ToothIcon className="w-5 h-5 text-red-500" />,
    Talent: <CubeIcon className="w-5 h-5 text-base-content" />,
  };

  return (
    <div className="flex flex-row">
      <div className="">
        <table className="table-auto">
          <tbody>
            {attributes.map(({ type, name, value, uptime }, i) => (
              <tr key={i} className="">
                <td className="w-5 h-5">{icons[type]}</td>
                <td className="pl-2">{value}</td>
                <td className="pl-2">{name}</td>
                <td className="pl-2">{uptime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex-grow" />
      <div className="text-right">
        <h2 className="text-lg font-semibold">{category}</h2>
        <h2 className="text-primary font-semibold">{name}</h2>
      </div>
    </div>
  );
};
