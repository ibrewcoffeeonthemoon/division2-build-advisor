"use client";

import {
  ArchiveBoxIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { ReactNode } from "react";

const Button = ({
  name,
  target,
  icon,
}: {
  name: string;
  target: string;
  icon: ReactNode;
}) => {
  return (
    <a
      href={target}
      className="
        flex flex-col items-center
        text-sm hover:text-gray-300 
        transition-colors duration-300
      "
    >
      <span className="w-7 h-7">{icon}</span>
      {name}
    </a>
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
      <Button name="Loadout" target="#" icon={<ArchiveBoxIcon />} />
      <Button name="Build" target="#" icon={<WrenchScrewdriverIcon />} />
      <Button name="Stats" target="#" icon={<ChartBarIcon />} />
    </nav>
  );
}
