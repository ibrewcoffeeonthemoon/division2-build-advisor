"use client";

const Button = ({ name, target }: { name: string; target: string }) => {
  return (
    <a
      href={target}
      className="
        text-sm font-bold hover:text-gray-300 
        transition-colors duration-300
      "
    >
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
      <Button name="Loadout" target="#" />
      <Button name="Build" target="#" />
      <Button name="Stats" target="#" />
    </nav>
  );
}
