import { ReactNode } from "react";
import GearCard from "./GearCard";
import WeaponCard from "./WeaponCard";

const Slot = ({ name }: { name: string }) => {
  return (
    <div
      className="
        card card-sm bg-accent/20 shadow-sm
        m-1
        text-xl font-bold
      "
    >
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          Core Attributes: WD 15%
          <br />
          Minor Attributes CHD 15%
          <br />
          Minor Attributes CHC 6%
          <br />
          Mods HS 6%
          <br />
          Talents HS 6%
        </p>
      </div>
    </div>
  );
};

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
