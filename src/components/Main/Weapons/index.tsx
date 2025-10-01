"use client";

import { Section } from "../Section";
import Card from "./Card";
import { store } from "@/store";

export default function Weapons() {
  const collapseOpen = store.ui.Main.Weapons.collapseOpen();
  const setCollapseOpen = store.ui.Main.Weapons.setCollapseOpen();

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
