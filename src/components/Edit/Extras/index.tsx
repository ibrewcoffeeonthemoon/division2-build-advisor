"use client";

import { store } from "@/store/ui/Edit";
import Card from "./Card";
import { Section } from "@/components/lib/Section";
import { SCHEMA } from "@/lib/constant";
import { Items } from "@/lib/type";

export default function Extras() {
  const open = store.state().section.open["Extras"];
  const setOpen = store.action().setSectionOpen;

  return (
    <Section
      name="Extras"
      control={
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen("Extras", e.currentTarget.checked)}
        />
      }
    >
      {Object.keys(SCHEMA.Extras).map((item, i) => (
        <Card key={i} item={item as Items<"Extras">} />
      ))}
    </Section>
  );
}
