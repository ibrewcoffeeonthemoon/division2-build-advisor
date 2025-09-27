import { ReactNode } from "react";

const Slot = ({ name }: { name: string }) => {
  return (
    <div
      className={`
        h-40 py-2 px-1 m-2
        rounded-2xl
        bg-orange-400 text-2xl font-bold
      `}
    >
      {name}
    </div>
  );
};

const Section = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <div className="bg-white dark:bg-orange-950">
      <h1 className="text-4xl text-left px-4 py-2">{name}</h1>
      <div className="grid grid-cols-2 items-center content-start">
        {children}
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
