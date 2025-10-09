import Basic from "./Basic";
import Damage from "./Damage";
import Dps from "./Dps";

export default function Stats() {
  return (
    <div className="flex-grow overflow-auto">
      <Basic />
      <Damage />
      <Dps />
    </div>
  );
}
