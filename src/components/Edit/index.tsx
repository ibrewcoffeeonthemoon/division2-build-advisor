"use client";

import Weapons from "./Weapons";
import Gears from "./Gears";
import Extras from "./Extras";
import { stores } from "@/store";
import { Build } from "@/lib/type";

export default function Edit() {
  const currentBuild = stores.data.state() as Build;
  const saveLoadout = stores.loadout.saveLoadout();

  return (
    <div className="flex-grow overflow-auto">
      <Weapons />
      <Gears />
      <Extras />
      <div className="w-full p-2 flex flex-row justify-center">
        <button
          className="btn btn-ghost text-primary"
          onClick={() => saveLoadout(currentBuild)}
        >
          Save to Loadout
        </button>
      </div>
    </div>
  );
}
