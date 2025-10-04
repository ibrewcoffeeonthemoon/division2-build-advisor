"use client";

import { store } from "@/store/ui/Main";
import Card from "./Card";
import { Section } from "../lib/Section";

export default function Gears() {
  const open = store.state().section.open["Gears"];
  const setOpen = store.setSectionOpen();

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
      <Card category="Mask" />
      <Card category="Backpack" />
      <Card category="Chest" />
      <Card category="Gloves" />
      <Card category="Holster" />
      <Card category="Kneepads" />
    </Section>
  );
}
