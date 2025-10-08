"use client";

import { store } from "@/store/ui/Edit";
import Card from "./Card";
import { Section } from "@/components/lib/Section";

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
      <Card item="Watch" />
      <Card item="Specialization" />
    </Section>
  );
}
