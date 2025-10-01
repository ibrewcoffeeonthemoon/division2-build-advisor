"use client";

import { store } from "@/store/ui/Main/Gears";
import { Section } from "../Section";
import Card from "./Card";

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
      <Card name="Weapon1" />
      <Card name="Weapon2" />
    </Section>
  );
}
