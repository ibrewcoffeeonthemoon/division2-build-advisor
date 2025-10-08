"use client";

import Weapons from "./Weapons";
import Gears from "./Gears";
import Extras from "./Extras";
import { stores } from "@/store";
import { createItemRecords } from "@/store/record";

export default function Edit() {
  const saveLoadout = stores.loadout.saveLoadout();

  return (
    <div className="flex-grow overflow-auto">
      <Weapons />
      <Gears />
      <Extras />
      <div className="w-full p-2 flex flex-row justify-center">
        <button
          className="btn btn-ghost text-primary"
          onClick={() =>
            saveLoadout({
              name: "Brandnew loadout",
              items: createItemRecords(() => ({
                name: "some weapon",
                attributes: [],
              })),
            })
          }
        >
          Save to Loadout
        </button>
      </div>
    </div>
  );
}
