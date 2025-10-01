"use client";

import { Section } from "../Section";
import Card from "./Card";
import { stores } from "@/store";

export default function Weapons() {
  const collapseOpen = stores.ui.Main.Weapons.collapseOpen();
  const setCollapseOpen = stores.ui.Main.Weapons.setCollapseOpen();

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
      <Card name="Weapon1" />
      <Card name="Weapon2" />
    </Section>
  );
}
