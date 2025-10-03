"use client";

import { store } from "@/store/ui/Main";
import { Section } from "../lib/Section";
import Card from "./Card";

export default function Weapons() {
  const collapseOpen = store.state()?.["Weapons"]?.collapseOpen;
  const setCollapseOpen = store.setCollapseOpen();

  return (
    <Section
      name="Weapons"
      control={
        <input
          type="checkbox"
          checked={collapseOpen}
          onChange={(e) => setCollapseOpen("Weapons", e.currentTarget.checked)}
        />
      }
    >
      <Card category="Primary" />
      <Card category="Secondary" />
      <Card category="Sidearm" />
      <Card category="Signature" />
    </Section>
  );
}
