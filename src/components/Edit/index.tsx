"use client";

import Weapons from "./Weapons";
import Gears from "./Gears";
import Extras from "./Extras";
import { stores } from "@/store";
import { Build } from "@/lib/type";

export default function Edit() {
  const currentBuild = stores.data.state() as Build;
  const setBuildName = stores.data.setBuildName();
  const saveLoadout = stores.loadout.saveLoadout();

  return (
    <div className="flex-grow overflow-auto">
      <Weapons />
      <Gears />
      <Extras />
      <div className="w-full p-2">
        <label className="input input-ghost w-full">
          <span className="font-bold">Build Name</span>
          <input
            type="text"
            className="grow text-primary pl-1"
            placeholder="<<<"
            onFocus={(e) => e.currentTarget.select()}
            value={currentBuild.name}
            onChange={(e) => {
              setBuildName(e.currentTarget.value);
            }}
          />
          <button
            className="btn btn-ghost text-primary"
            onClick={() => saveLoadout(currentBuild)}
          >
            Save Loadout
          </button>
        </label>
      </div>
    </div>
  );
}
