import Weapons from "./Weapons";
import Gears from "./Gears";
import Watch from "./Watch";

export default function Main() {
  return (
    <div className="flex-grow overflow-auto">
      <Weapons />
      <Gears />
      <Watch />
    </div>
  );
}
