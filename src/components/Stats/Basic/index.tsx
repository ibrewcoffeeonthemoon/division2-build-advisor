"use client";

import { stores } from "@/store";
import { SCHEMA } from "@/lib/constant";
import { ItemCard } from "../lib/ItemCard";
import { Section } from "@/components/lib/Section";
import { calAmplifierSums } from "@/lib/damage/amplifier";
import { Items } from "@/lib/type";
import { Amplifier } from "@/lib/type/amplifier";

const Row = ({
  item,
  name,
  amplifier,
}: {
  item: string;
  name: string;
  amplifier: Amplifier;
}) => {
  const amplifierSums = calAmplifierSums(stores.edit.state());

  return (
    <>
      <span className="col-span-9 text-bold">{name}</span>
      <span className="col-span-6 text-info">
        {amplifierSums[item as Items<"Weapons">][amplifier] * 100}%
      </span>
    </>
  );
};

export default function Basic() {
  const section = "Basic";
  const open = stores.ui.Stats.state().section.open[section];
  const setOpen = stores.ui.Stats.action().setSectionOpen;
  const baseDamageReady = (item: string) =>
    (stores.edit.state().items["Weapons"][item].baseDamage ?? 0) > 0;

  return (
    <Section
      name={section}
      control={
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen(section, e.currentTarget.checked)}
        />
      }
    >
      {Object.keys(SCHEMA.Weapons).map(
        (item, i) =>
          baseDamageReady(item) && (
            <ItemCard key={i} category={section} item={item}>
              <div className="col-span-12 grid grid-cols-15 p-0 text-right">
                <Row item={item} name="Critical Hit Chance" amplifier="CHC" />
                <Row item={item} name="Critical Hit Damage" amplifier="CHD" />
                <Row item={item} name="Headshot Damage" amplifier="HS" />
              </div>
            </ItemCard>
          ),
      )}
    </Section>
  );
}
