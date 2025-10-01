"use client";

import { store } from "@/store/ui/Main/Weapons";
import { Section } from "../lib/Section";
import Card from "./Card";

export default function Weapons() {
  const collapseOpen = store.collapseOpen();
  const setCollapseOpen = store.setCollapseOpen();

  return (
    <Section
      name="Weapons"
      control={
        <input
          type="checkbox"
          checked={collapseOpen}
          onChange={(e) => setCollapseOpen(e.currentTarget.checked)}
        />
      }
    >
      <Card category="Weapon1" name="name" />
      <Card category="Weapon2" name="name" />
    </Section>
  );
}
