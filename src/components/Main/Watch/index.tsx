"use client";

import { store } from "@/store/ui/Main/Watch";
import { Section } from "../lib/Section";
import Card from "./Card";

export default function Watch() {
  const collapseOpen = store.collapseOpen();
  const setCollapseOpen = store.setCollapseOpen();

  return (
    <Section
      name="Watch"
      control={
        <input
          type="checkbox"
          checked={collapseOpen}
          onChange={(e) => setCollapseOpen(e.currentTarget.checked)}
        />
      }
    >
      <Card category="Watch" name="name" />
    </Section>
  );
}
