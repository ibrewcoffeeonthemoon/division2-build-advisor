"use client";

import { stores } from "@/store";
import { ItemCard } from "../lib/ItemCard";
import { Section } from "@/components/lib/Section";
import { Spreadsheet } from "./Spreadsheet";
import { Items } from "@/lib/type";
import { ITEM_NAMES } from "@/lib/constant";

export default function Dps() {
  const section = "Dps";
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
      {ITEM_NAMES.Weapons.map(
        (item, i) =>
          baseDamageReady(item) && (
            <ItemCard key={i} category={section} item={item}>
              <Spreadsheet weapon={item as Items<"Weapons">} />
            </ItemCard>
          ),
      )}
    </Section>
  );
}
