import { Attribute, AttributeType } from "@/lib/type";
import { round } from "@/lib/utils";
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
    <div className="grid grid-cols-24 text-info font-light items-center">
      {attributes.map(({ type, name, value, uptime, note }) => (
        <>
          <span className="col-span-1 col-start-1 w-5 h-5">{icons[type]}</span>
          <span className="col-span-3 pl-2">
            {value && round(value * 100, 2)}%
          </span>
          {note === "" ? (
            <span className="col-span-16 pl-2">{name}</span>
          ) : (
            <>
              <span className="col-span-10 pl-2">{name}</span>
              <span className="col-span-6 pl-2 overflow-clip overflow-ellipsis wrap-normal">
                {note}
              </span>
            </>
          )}
          {uptime !== 1 && (
            <span className="col-span-3 pl-2 text-base-content/50">
              {uptime && round(uptime * 100, 0)}%
            </span>
          )}
        </>
      ))}
    </div>
  );
};
