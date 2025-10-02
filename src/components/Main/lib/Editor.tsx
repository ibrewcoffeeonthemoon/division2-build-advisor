import { ReactNode } from "react";
import {
  StopCircleIcon,
  Cog8ToothIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";

const Input = ({
  icon,
  field,
  placeholder,
}: {
  icon: ReactNode;
  field: string;
  placeholder: string;
}) => {
  return (
    <label className="input input-ghost input-md w-full items-center">
      {icon}
      <span>{field}</span>
      <input type="text" className="grow" placeholder={placeholder} />
    </label>
  );
};

export const Editor = () => {
  return (
    <div className="collapse-content px-3">
      <Input
        icon={<StopCircleIcon className="text-red-500 size-7" />}
        field="Name"
        placeholder="Item Name"
      />
      <Input
        icon={<StopCircleIcon className="text-red-500 size-7" />}
        field="Weapon Damage"
        placeholder="Value"
      />
      <Input
        icon={<StopCircleIcon className="text-red-500 size-7" />}
        field="Critical Hit Chance"
        placeholder="Value"
      />
      <Input
        icon={<StopCircleIcon className="text-red-500 size-7" />}
        field="Critical Hit Damage"
        placeholder="Value"
      />
      <Input
        icon={<Cog8ToothIcon className="text-red-500 size-7" />}
        field="Headshot Damage"
        placeholder="Value"
      />
      <Input
        icon={<CubeIcon className="text-base-content size-7" />}
        field="Talents"
        placeholder="Value"
      />
    </div>
  );
};
