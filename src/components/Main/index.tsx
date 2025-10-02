import Weapons from "./Weapons";
import Gears from "./Gears";
import Watch from "./Watch";

export default function Main() {
  return (
    <div className="flex-grow overflow-auto">
      <Weapons />
      <Gears />
      <Watch />
      <div className="w-full p-2 flex flex-row justify-center">
        <button className="btn btn-primary btn-outline">Save to Loadout</button>
      </div>
    </div>
  );
}
