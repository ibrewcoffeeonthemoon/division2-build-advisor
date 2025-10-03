"use client";

import { store } from "@/store/ui/Main/Gears";
import Card from "./Card";
import { Section } from "../lib/Section";

export default function Gears() {
  const collapseOpen = store.collapseOpen();
  const setCollapseOpen = store.setCollapseOpen();

  return (
    <Section
      name="Gears"
      control={
        <input
          type="checkbox"
          checked={collapseOpen}
          onChange={(e) => setCollapseOpen(e.currentTarget.checked)}
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
