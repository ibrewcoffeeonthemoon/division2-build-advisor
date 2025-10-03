import { Attribute, AttributeType } from "@/lib/type";
import {
  StopCircleIcon,
  Cog8ToothIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";
import { JSX } from "react";

export type SummaryProps = {
  attributes: Attribute[];
};

export const Summary = ({ attributes }: SummaryProps) => {
  const icons: Record<AttributeType, JSX.Element> = {
    Attribute: <StopCircleIcon className="w-5 h-5 text-red-500" />,
    Mod: <Cog8ToothIcon className="w-5 h-5 text-red-500" />,
    Talent: <CubeIcon className="w-5 h-5 text-base-content" />,
  };

  return (
    <div className="grid grid-cols-12 items-center">
      <div className="col-span-12">
        <table className="table-auto">
          <tbody>
            {attributes?.map(({ type, name, value, uptime, note }, i) => (
              <tr key={i} className="">
                <td className="w-5 h-5">{icons[type]}</td>
                <td className="pl-2">{(value * 100).toFixed(1)}%</td>
                <td className="pl-2">{name}</td>
                <td className="pl-2">{(uptime * 100).toFixed(0)}%</td>
                <td className="pl-2">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
