"use client";

import { ReactNode } from "react";
import {
  ArchiveBoxIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { stores } from "@/store";

const Button = ({
  id,
  name,
  icon,
}: {
  id: number;
  name: string;
  icon: ReactNode;
}) => {
  const activeButton = stores.ui.Dock.activeButton();
  const setActiveButton = stores.ui.Dock.setActiveButton();

  return (
    <button
      className={`${activeButton === id ? "dock-active" : ""}`}
      onClick={() => setActiveButton(id)}
    >
      <span className="w-6 h-6">{icon}</span>
      <span className="dock-label">{name}</span>
    </button>
  );
};

export default function Dock() {
  const buttons = [
    { name: "Loadout", icon: <ArchiveBoxIcon /> },
    { name: "Build", icon: <WrenchScrewdriverIcon /> },
    { name: "Stats", icon: <ChartBarIcon /> },
  ];
  return (
    <div className="dock static">
      {buttons.map(({ name, icon }, id) => (
        <Button key={id} {...{ name, icon, id }} />
      ))}
    </div>
  );
}
