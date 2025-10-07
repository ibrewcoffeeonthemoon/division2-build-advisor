import Dock from "@/components/Dock";
import NavBar from "@/components/NavBar";

export default function Loadout() {
  return (
    <div
      className="
        h-full w-full fixed self-auto
        grid-cols-1 place-items-center
      "
    >
      <div
        className="
          h-full w-full md:max-w-xl
          flex flex-col
        "
      >
        <NavBar />
        <div className="flex-grow overflow-auto flex flex-col justify-center items-center">
          <h1 className="text-5xl">Loadout</h1>
        </div>
        <Dock />
      </div>
    </div>
  );
}
