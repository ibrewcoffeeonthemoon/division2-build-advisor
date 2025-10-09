"use client";

import { stores } from "@/store";
import { SCHEMA } from "@/lib/constant";
import { ItemCard } from "../lib/ItemCard";
import { Section } from "@/components/lib/Section";

export default function Basic() {
  const section = "Basic";
  const open = stores.ui.Stats.state().section.open[section];
  const setOpen = stores.ui.Stats.action().setSectionOpen;
  const baseDamageReady = (item: string) =>
    (stores.edit.state().items["Weapons"][item].baseDamage ?? 0) > 0;

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
      {Object.keys(SCHEMA.Weapons).map(
        (item, i) =>
          baseDamageReady(item) && (
            <ItemCard key={i} category={section} item={item}>
              <div className="col-span-12 grid grid-cols-15 p-0 text-right">
                CHC CHD HS
              </div>
            </ItemCard>
          ),
      )}
    </Section>
  );
}
