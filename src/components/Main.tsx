import { ReactNode } from "react";

const Slot = ({ name }: { name: string }) => {
  return (
    <div
      className="
        card card-sm bg-base-100 shadow-sm
        h-40
        text-xl font-bold
      "
    >
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

const Section = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <div className="card card-sm bg-base-100 shadow-sm">
      <div className="card-body">
        <h1 className="card-title">{name}</h1>
        <div className="grid grid-cols-2 items-center content-start">
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
        <Slot name="Weapon1" />
        <Slot name="Weapon2" />
      </Section>
      <Section name="Gears">
        <Slot name="Mask" />
        <Slot name="Backpack" />
        <Slot name="Chest" />
        <Slot name="Gloves" />
        <Slot name="Holster" />
        <Slot name="Kneepads" />
      </Section>
    </div>
  );
}
