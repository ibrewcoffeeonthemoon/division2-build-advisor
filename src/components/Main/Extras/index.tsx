"use client";

import { store } from "@/store/ui/Main";
import { Section } from "../lib/Section";
import Card from "./Card";

export default function Extras() {
  const open = store.state().section.open["Extras"];
  const setOpen = store.setSectionOpen();

  return (
    <Section
      name="Extras"
      control={
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen("Extras", e.currentTarget.checked)}
        />
      }
    >
      <Card category="Watch" />
      <Card category="Specialization" />
    </Section>
  );
}
