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
      <Card category="Mask" name="name" />
      <Card category="Backpack" name="name" />
      <Card category="Chest" name="name" />
      <Card category="Gloves" name="name" />
      <Card category="Holster" name="name" />
      <Card category="Kneepads" name="name" />
    </Section>
  );
}
