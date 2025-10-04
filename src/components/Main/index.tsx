import Weapons from "./Weapons";
import Gears from "./Gears";
import Extras from "./Extras";

export default function Main() {
  return (
    <div className="flex-grow overflow-auto">
      <Weapons />
      <Gears />
      <Extras />
      <div className="w-full p-2 flex flex-row justify-center">
        <button className="btn btn-ghost text-primary">Save to Loadout</button>
      </div>
    </div>
  );
}
