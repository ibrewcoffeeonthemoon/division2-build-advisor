"use client";

import { stores } from "@/store";
import { SCHEMA } from "@/lib/constant";
import { ItemCard } from "../lib/ItemCard";
import { Section } from "@/components/lib/Section";
import { calAmplifierSums } from "@/lib/damage/amplifier";
import { Items } from "@/lib/type";

export default function Basic() {
  const section = "Basic";
  const open = stores.ui.Stats.state().section.open[section];
  const setOpen = stores.ui.Stats.action().setSectionOpen;
  const baseDamageReady = (item: string) =>
    (stores.edit.state().items["Weapons"][item].baseDamage ?? 0) > 0;
  const amplifierSums = calAmplifierSums(stores.edit.state());

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
                <span className="col-span-9 text-bold">
                  Critical Hit Chance
                </span>
                <span className="col-span-6 text-info">
                  {amplifierSums[item as Items<"Weapons">].CHC * 100}%
                </span>
                <span className="col-span-9 text-bold">
                  Critical Hit Damage
                </span>
                <span className="col-span-6 text-info">
                  {amplifierSums[item as Items<"Weapons">].CHD * 100}%
                </span>
                <span className="col-span-9 text-bold">Headshot Damage</span>
                <span className="col-span-6 text-info">
                  {amplifierSums[item as Items<"Weapons">].HS * 100}%
                </span>
              </div>
            </ItemCard>
          ),
      )}
    </Section>
  );
}
