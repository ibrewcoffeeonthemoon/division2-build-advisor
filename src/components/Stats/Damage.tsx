import { store } from "@/store/ui/Stats";
import { Section } from "../Edit/lib/Section";

export default function Damage() {
  const open = store.state().section.open["Damage"];
  const setOpen = store.setSectionOpen();

  return (
    <Section
      name="Damage"
      control={
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen("Damage", e.currentTarget.checked)}
        />
      }
    >
      <h1 className="text-5xl">Damage</h1>
    </Section>
  );
}
