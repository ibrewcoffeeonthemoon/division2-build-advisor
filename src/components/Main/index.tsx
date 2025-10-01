import { ReactNode } from "react";
import GearCard from "./GearCard";
import WeaponCard from "./WeaponCard";

const Section = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <div className="card card-sm bg-base-300 shadow-sm">
      <div className="card-body">
        <h1 className="card-title">{name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center content-start">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Main() {
  return (
    <div className="flex-grow overflow-auto">
      <Section name="Weapons">
        <WeaponCard name="Weapon1" />
        <WeaponCard name="Weapon2" />
      </Section>
      <Section name="Gears">
        <GearCard name="Mask" />
        <GearCard name="Backpack" />
        <GearCard name="Chest" />
        <GearCard name="Gloves" />
        <GearCard name="Holster" />
        <GearCard name="Kneepads" />
      </Section>
    </div>
  );
}
