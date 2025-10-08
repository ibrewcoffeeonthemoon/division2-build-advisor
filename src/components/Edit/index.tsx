"use client";

import Weapons from "./Weapons";
import Gears from "./Gears";
import Extras from "./Extras";
import { stores } from "@/store";
import { Build } from "@/lib/type";
import { DEFAULT_BUILD } from "@/lib/default";

export default function Edit() {
  const currentBuild = stores.edit.state() as Build;
  const setBuildName = stores.edit.action().build.setBuildName;
  const setBuild = stores.edit.action().build.setBuild;
  const saveLoadout = stores.loadout.action().saveLoadout;

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
        <div className="flex flex-row justify-end pr-3">
          <button
            className="btn btn-ghost text-error"
            onClick={() => setBuild(DEFAULT_BUILD)}
          >
            Load Default
          </button>
        </div>
      </div>
    </div>
  );
}
