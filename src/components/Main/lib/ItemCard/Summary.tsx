import { Attribute, AttributeType } from "@/lib/type";
import { store } from "@/store/data";
import {
  StopCircleIcon,
  Cog8ToothIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";
import { JSX } from "react";

export type SummaryProps<S, C> = {
  section: S;
  category: C;
  attributes: Attribute[];
};

export const Summary = <S extends string, C extends string>({
  section,
  category,
  attributes,
}: SummaryProps<S, C>) => {
  const name = store.state()?.[section]?.[category]?.name;

  const icons: Record<AttributeType, JSX.Element> = {
    Attribute: <StopCircleIcon className="w-5 h-5 text-red-500" />,
    Mod: <Cog8ToothIcon className="w-5 h-5 text-red-500" />,
    Talent: <CubeIcon className="w-5 h-5 text-base-content" />,
  };

  return (
    <div className="grid grid-cols-12 items-center">
      <h2 className="col-span-4 text-lg font-semibold gap-0.5">{category}</h2>
      <h2 className="col-span-8 text-lg text-right text-primary font-semibold overflow-hidden overflow-ellipsis text-nowrap">
        {name}
      </h2>
      <div className="col-span-12">
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
    </div>
  );
};
