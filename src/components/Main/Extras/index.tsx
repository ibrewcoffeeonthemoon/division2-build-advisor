"use client";

import { store } from "@/store/ui/Main";
import { Section } from "../lib/Section";
import Card from "./Card";

export default function Extras() {
  const collapseOpen = store.state()?.["Extras"]?.collapseOpen;
  const setCollapseOpen = store.setCollapseOpen();

  return (
    <Section
      name="Extras"
      control={
        <input
          type="checkbox"
          checked={collapseOpen}
          onChange={(e) => setCollapseOpen("Extras", e.currentTarget.checked)}
        />
      }
    >
      <Card category="Watch" />
      <Card category="Specialization" />
    </Section>
  );
}
