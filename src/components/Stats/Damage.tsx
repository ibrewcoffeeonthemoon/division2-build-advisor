"use client";

import { stores } from "@/store";
import { Section } from "../Edit/lib/Section";
import { calDamage } from "@/lib/damage";
import { round } from "@/lib/utils";
import { Items } from "@/lib/type";

export const SpreadSheet = ({ weapon }: { weapon: Items<"Weapons"> }) => {
  const { dmgRecord } = calDamage(weapon, stores.data.state());

  return (
    <>
      <span className="col-span-3">{weapon}</span>
      <span className="col-span-3">
        {round(dmgRecord.normal.bodyshot.health.nocover, 0).toLocaleString()}
      </span>
      <span className="col-span-3 text-red-700">
        {round(dmgRecord.normal.headshot.health.nocover, 0).toLocaleString()}
      </span>
      <span className="col-span-3 text-orange-400">
        {round(dmgRecord.critical.bodyshot.health.nocover, 0).toLocaleString()}
      </span>
      <span className="col-span-3 text-orange-400 font-bold">
        {round(dmgRecord.critical.headshot.health.nocover, 0).toLocaleString()}
      </span>
    </>
  );
};

export default function Damage() {
  const open = stores.ui.Stats.state().section.open["Damage"];
  const setOpen = stores.ui.Stats.setSectionOpen();
  const { dmgRecord, dpsRecord } = calDamage("Primary", stores.data.state());

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
      <div className="grid grid-cols-15 p-2">
        {/* header */}
        <span className="col-span-6 col-start-4">Normal</span>
        <span className="col-span-6">Critical</span>
        <span className="col-span-3 col-start-4">Body</span>
        <span className="col-span-3">Head</span>
        <span className="col-span-3">Body</span>
        <span className="col-span-3">Head</span>
        {/* data */}
        <SpreadSheet weapon="Primary" />
        <SpreadSheet weapon="Secondary" />
        <SpreadSheet weapon="Sidearm" />
        <SpreadSheet weapon="Signature" />
      </div>
    </Section>
  );
}
