"use client";

import { stores } from "@/store";
import { Items } from "@/lib/type";
import { SCHEMA } from "@/lib/constant";
import { Section } from "@/components/Edit/lib/Section";
import { ItemCard } from "../lib/ItemCard";
import { Spreadsheet } from "./Spreadsheet";

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
          <div className="col-span-12 grid grid-cols-15 p-0 text-right">
            {/* header */}
            <span className="col-span-6 col-start-4">Normal</span>
            <span className="col-span-6">Critical</span>
            <span className="col-span-3 col-start-4">Body</span>
            <span className="col-span-3">Head</span>
            <span className="col-span-3">Body</span>
            <span className="col-span-3">Head</span>
            {/* data */}
            <Spreadsheet weapon={item as Items<"Weapons">} />
          </div>
        </ItemCard>
      ))}
    </Section>
  );
}
