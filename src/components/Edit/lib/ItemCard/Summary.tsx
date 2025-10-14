import { Attribute, AttributeType } from "@/lib/type/attribute";
import { round } from "@/lib/utils";
import {
  StopCircleIcon,
  Cog8ToothIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";
import { Fragment, JSX } from "react";

export type SummaryProps = {
  attributes: Attribute[];
};

export const Summary = ({ attributes }: SummaryProps) => {
  const icons: Record<AttributeType, JSX.Element> = {
    Brandset: <StopCircleIcon className="w-5 h-5 text-yellow-500" />,
    Gearset: <StopCircleIcon className="w-5 h-5 text-green-500" />,
    Attribute: <StopCircleIcon className="w-5 h-5 text-red-500" />,
    Mod: <Cog8ToothIcon className="w-5 h-5 text-red-500" />,
    Talent: <CubeIcon className="w-5 h-5 text-base-content" />,
  };

  return (
    <div className="grid grid-cols-24 text-info font-light items-center text-nowrap">
      {attributes.map(({ type, name, value, uptime, note }, i) => {
        const showNote = note && note !== "";
        const showUptime = typeof uptime === "number" && uptime < 1;

        return (
          <Fragment key={i}>
            <span className="col-span-1 col-start-1 w-5 h-5">
              {type && icons[type]}
            </span>
            <span className="col-span-3 pl-2">
              {value && round(value * 100, 2)}%
            </span>
            <span
              className={`${
                showNote ? "col-span-10" : "col-span-16"
              } pl-2 text-nowrap overflow-clip overflow-ellipsis`}
            >
              {name}
            </span>
            {showNote && (
              <span
                className={`${
                  showUptime ? "col-span-6" : "col-span-9"
                } pl-2 text-nowrap overflow-clip overflow-ellipsis`}
              >
                {note}
              </span>
            )}
            {showUptime && (
              <span className="col-span-3 pl-2 text-base-content/50">
                {uptime && round(uptime * 100, 0)}%
              </span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
