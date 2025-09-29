"use client";

import { ChartBarIcon } from "@heroicons/react/24/solid";

const Button = ({ name, target }: { name: string; target: string }) => {
  return (
    <div className="flex flex-col items-center">
      <ChartBarIcon className="w-8 h-8" />
      <a
        href={target}
        className="
        text-sm hover:text-gray-300 
        transition-colors duration-300
      "
      >
        {name}
      </a>
    </div>
  );
};

export default function Bottom() {
  return (
    <nav
      className="
        grid grid-cols-3
        text-center bg-orange-600
        px-1 py-1
      "
    >
      <Button name="Loadout" target="#" />
      <Button name="Build" target="#" />
      <Button name="Stats" target="#" />
    </nav>
  );
}
