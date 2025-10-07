"use client";

import { calDamage } from "@/lib/damage";
import { store } from "@/store/data";

export default function Stats() {
  const { dmgRecord, dpsRecord } = calDamage("Primary", store.state());
  const dmg = dmgRecord.normal.bodyshot.health.nocover;
  const dps = dpsRecord.normal.bodyshot.health.nocover;

  return (
    <div className="flex-grow overflow-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl">Stats</h1>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h2 className="">DMG</h2>
          <span className="text-info overflow-hidden overflow-ellipsis text-nowrap">
            {dmg && Math.round(dmg).toLocaleString()}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <h2 className="">DPS</h2>
          <span className="text-info overflow-hidden overflow-ellipsis text-nowrap">
            {dps && Math.round(dps).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
