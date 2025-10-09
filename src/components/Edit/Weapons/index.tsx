"use client";

import { store } from "@/store/ui/Edit";
import Card from "./Card";
import { Section } from "@/components/lib/Section";
import { SCHEMA } from "@/lib/constant";
import { Items } from "@/lib/type";

export default function Weapons() {
  const open = store.state().section.open["Weapons"];
  const setOpen = store.action().setSectionOpen;

  return (
    <Section
      name="Weapons"
      control={
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen("Weapons", e.currentTarget.checked)}
        />
      }
    >
      {Object.keys(SCHEMA.Weapons).map((item, i) => (
        <Card key={i} item={item as Items<"Weapons">} />
      ))}
    </Section>
  );
}
