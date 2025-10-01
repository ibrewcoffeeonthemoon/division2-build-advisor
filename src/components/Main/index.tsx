import { ReactNode } from "react";
import GearCard from "./GearCard";
import WeaponCard from "./WeaponCard";

const Section = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <details
      className="collapse collapse-arrow bg-base-100 border-base-300 border"
      open
    >
      <summary className="collapse-title font-semibold">{name}</summary>
      <div className="collapse-content text-sm">{children}</div>
    </details>
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
