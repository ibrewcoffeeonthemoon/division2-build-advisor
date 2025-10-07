"use client";

import { stores } from "@/store";
import { Section } from "../Edit/lib/Section";
import { calDamage } from "@/lib/damage";

export default function Damage() {
  const open = stores.ui.Stats.state().section.open["Damage"];
  const setOpen = stores.ui.Stats.setSectionOpen();
  const { dmgRecord, dpsRecord } = calDamage("Primary", stores.data.state());
  const dmg = dmgRecord.normal.bodyshot.health.nocover;
  const dps = dpsRecord.normal.bodyshot.health.nocover;

  return (
    <Section
      name="Damage"
      control={
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen("Damage", e.currentTarget.checked)}
        />
      }
    >
      <div className="flex-grow overflow-auto flex flex-col justify-center items-center">
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
    </Section>
  );
}
