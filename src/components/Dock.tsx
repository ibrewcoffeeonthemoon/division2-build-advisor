import { ReactNode } from "react";
import {
  ArchiveBoxIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

const Button = ({ name, icon }: { name: string; icon: ReactNode }) => {
  return (
    <button>
      <span className="w-7 h-7">{icon}</span>
      <span className="dock-label">{name}</span>
    </button>
  );
};

export default function Dock() {
  return (
    <div className="dock static">
      <Button name="Loadout" icon={<ArchiveBoxIcon />} />
      <Button name="Build" icon={<WrenchScrewdriverIcon />} />
      <Button name="Stats" icon={<ChartBarIcon />} />
    </div>
  );
}
