"use client";

import { stores } from "@/store";
import { Items } from "@/lib/type";
import { ItemCard } from "../lib/ItemCard";
import { Spreadsheet } from "./Spreadsheet";
import { Section } from "@/components/lib/Section";
import { ITEM_NAMES } from "@/lib/constant";
import Multiplier from "./Multiplier";

export default function Damage() {
  const section = "Damage";
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
              <Multiplier />
            </ItemCard>
          ),
      )}
    </Section>
  );
}
