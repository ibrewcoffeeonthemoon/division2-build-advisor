import Weapons from "./Weapons";
import Gears from "./Gears";

export default function Main() {
  return (
    <div className="flex-grow overflow-auto">
      <Weapons />
      <Gears />
    </div>
  );
}
