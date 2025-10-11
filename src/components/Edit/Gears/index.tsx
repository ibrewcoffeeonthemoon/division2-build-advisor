"use client";

import { store } from "@/store/ui/Edit";
import Card from "./Card";
import { Section } from "@/components/lib/Section";
import { Items } from "@/lib/type";
import { ITEM_NAMES } from "@/lib/constant";

export default function Gears() {
  const open = store.state().section.open["Gears"];
  const setOpen = store.action().setSectionOpen;

  return (
    <Section
      name="Gears"
      control={
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen("Gears", e.currentTarget.checked)}
        />
      }
    >
      {ITEM_NAMES.Gears.map((item, i) => (
        <Card key={i} item={item as Items<"Gears">} />
      ))}
    </Section>
  );
}
