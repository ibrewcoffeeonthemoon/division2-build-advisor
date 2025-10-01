"use client";

import { Section } from "../Section";
import Card from "./Card";
import { stores } from "@/store";

export default function Gears() {
  const collapseOpen = stores.ui.Main.Gears.collapseOpen();
  const setCollapseOpen = stores.ui.Main.Gears.setCollapseOpen();

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
