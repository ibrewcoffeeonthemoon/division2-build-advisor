"use client";

import { store } from "@/store/ui/Main/Extras";
import { Section } from "../lib/Section";
import Card from "./Card";

export default function Extras() {
  const collapseOpen = store.collapseOpen();
  const setCollapseOpen = store.setCollapseOpen();

  return (
    <Section
      name="Extras"
      control={
        <input
          type="checkbox"
          checked={collapseOpen}
          onChange={(e) => setCollapseOpen(e.currentTarget.checked)}
        />
      }
    >
      <Card category="Watch" name="name" />
      <Card category="Specialization" name="name" />
    </Section>
  );
}
