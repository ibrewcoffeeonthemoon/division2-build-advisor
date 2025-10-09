import Basic from "./Basic";
import Damage from "./Damage";

export default function Stats() {
  return (
    <div className="flex-grow overflow-auto">
      <Basic />
      <Damage />
    </div>
  );
}
