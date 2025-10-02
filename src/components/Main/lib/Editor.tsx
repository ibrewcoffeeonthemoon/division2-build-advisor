import { ReactNode } from "react";
import {
  StopCircleIcon,
  Cog8ToothIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";

export const NameInput = () => {
  return (
    <label className="input input-neutral w-full col-span-12">
      <span className="font-bold">Name</span>
      <input
        type="text"
        className="grow text-primary font-bold pl-1"
        placeholder=">>>"
        onFocus={(e) => e.currentTarget.select()}
      />
      <span className="badge badge-ghost badge-xs">Required</span>
    </label>
  );
};

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
    <div className="col-span-12 grid grid-cols-12 items-center">
      <div className="col-span-1">{icon}</div>
      <select
        className="select select-ghost w-auto col-span-2"
        defaultValue="WD"
      >
        <option disabled={true}>Amplifier</option>
        <option>WD</option>
        <option>TWD</option>
        <option>Amp</option>
      </select>
      <select
        className="select select-ghost w-auto col-span-2"
        defaultValue="WD"
      >
        <option disabled={true}>Attribute</option>
        <option>CHC</option>
        <option>CHD</option>
        <option>HS</option>
      </select>

      <label className="grow input input-ghost input-md w-full items-center col-span-7">
        <input type="text" className="grow" placeholder={placeholder} />
        <span>{field}</span>
      </label>
    </div>
  );
};

export const Editor = () => {
  return (
    <div className="grid grid-cols-12 collapse-content px-3">
      <NameInput />
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
