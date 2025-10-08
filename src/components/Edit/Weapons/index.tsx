"use client";

import { store } from "@/store/ui/Edit";
import Card from "./Card";
import { Section } from "@/components/lib/Section";

export default function Weapons() {
  const open = store.state().section.open["Weapons"];
  const setOpen = store.setSectionOpen();

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
      <Card item="Primary" />
      <Card item="Secondary" />
      <Card item="Sidearm" />
      <Card item="Signature" />
    </Section>
  );
}
