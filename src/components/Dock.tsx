"use client";

import { ReactNode } from "react";
import Link from "next/link";
import {
  ArchiveBoxIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { store } from "@/store/ui/Dock";

const Button = ({
  id,
  name,
  icon,
  href,
}: {
  id: number;
  name: string;
  icon: ReactNode;
  href: string;
}) => {
  const activeButton = store.activeButton();
  const setActiveButton = store.setActiveButton();

  return (
    <Link
      className={`${activeButton === id ? "dock-active" : ""}`}
      onClick={() => setActiveButton(id)}
      href={href}
    >
      <span className="w-6 h-6">{icon}</span>
      <span className="dock-label">{name}</span>
    </Link>
  );
};

export default function Dock() {
  const buttons = [
    { name: "Loadout", href: "/loadout", icon: <ArchiveBoxIcon /> },
    { name: "Build", href: "/build", icon: <WrenchScrewdriverIcon /> },
    { name: "Stats", href: "/stats", icon: <ChartBarIcon /> },
  ];
  return (
    <div className="dock static bg-base-200 border-y-2 border-base-300">
      {buttons.map(({ name, icon, href }, id) => (
        <Button key={id} {...{ name, icon, id, href }} />
      ))}
    </div>
  );
}
