import { ReactNode } from "react";
import {
  ArchiveBoxIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

const Button = ({
  id,
  name,
  icon,
}: {
  id: number;
  name: string;
  icon: ReactNode;
}) => {
  return (
    <button>
      <span className="w-7 h-7">{icon}</span>
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
