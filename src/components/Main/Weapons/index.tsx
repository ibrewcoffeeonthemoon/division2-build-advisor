"use client";

import { store } from "@/store/ui/Main";
import { Section } from "../lib/Section";
import Card from "./Card";

export default function Weapons() {
  const open = store.state().section.open["Weapons"];
  const setOpen = store.setSectionOpen();

  return (
    <Section
      name="Weapons"
      control={
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen("Weapons", e.currentTarget.checked)}
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
