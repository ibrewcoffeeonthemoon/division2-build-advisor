"use client";

import { stores } from "@/store";
import { calDamage } from "@/lib/damage";
import { round } from "@/lib/utils";
import { Items } from "@/lib/type";
import { SCHEMA } from "@/lib/constant";
import { Section } from "@/components/Edit/lib/Section";
import { ItemCard } from "../lib/ItemCard";

export const SpreadSheet = ({ weapon }: { weapon: Items<"Weapons"> }) => {
  const { dmgRecord: d } = calDamage(weapon, stores.data.state());
  const format = (x: number) => round(x, 0).toLocaleString();

  return (
    <>
      <span className="col-span-3">health inC</span>
      <span className="col-span-3">
        {format(d.normal.bodyshot.health.cover)}
      </span>
      <span className="col-span-3 text-red-700">
        {format(d.normal.headshot.health.cover)}
      </span>
      <span className="col-span-3 text-orange-400">
        {format(d.critical.bodyshot.health.cover)}
      </span>
      <span className="col-span-3 text-orange-400 font-bold">
        {format(d.critical.headshot.health.cover)}
      </span>
      <span className="col-span-3">health ooC</span>
      <span className="col-span-3">
        {format(d.normal.bodyshot.health.nocover)}
      </span>
      <span className="col-span-3 text-red-700">
        {format(d.normal.headshot.health.nocover)}
      </span>
      <span className="col-span-3 text-orange-400">
        {format(d.critical.bodyshot.health.nocover)}
      </span>
      <span className="col-span-3 text-orange-400 font-bold">
        {format(d.critical.headshot.health.nocover)}
      </span>
    </>
  );
};

export default function Damage() {
  const section = "Damage";
  const open = stores.ui.Stats.state().section.open[section];
  const setOpen = stores.ui.Stats.setSectionOpen();

  return (
    <Section
      name={section}
      control={
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen(section, e.currentTarget.checked)}
        />
      }
    >
      {Object.keys(SCHEMA.Weapons).map((item, i) => (
        <ItemCard key={i} section={section} item={item}>
          <div className="col-span-12 grid grid-cols-15 p-0">
            {/* header */}
            <span className="col-span-6 col-start-4">Normal</span>
            <span className="col-span-6">Critical</span>
            <span className="col-span-3 col-start-4">Body</span>
            <span className="col-span-3">Head</span>
            <span className="col-span-3">Body</span>
            <span className="col-span-3">Head</span>
            {/* data */}
            <SpreadSheet weapon={item as Items<"Weapons">} />
          </div>
        </ItemCard>
      ))}
    </Section>
  );
}
