"use client";

import { store } from "@/store/ui/Edit";
import Card from "./Card";
import { Section } from "@/components/lib/Section";

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
      <Card item="Mask" />
      <Card item="Backpack" />
      <Card item="Chest" />
      <Card item="Gloves" />
      <Card item="Holster" />
      <Card item="Kneepads" />
    </Section>
  );
}
