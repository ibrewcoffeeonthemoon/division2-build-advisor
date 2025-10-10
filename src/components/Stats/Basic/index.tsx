"use client";

import { stores } from "@/store";
import { SCHEMA } from "@/lib/constant";
import { ItemCard } from "../lib/ItemCard";
import { Section } from "@/components/lib/Section";
import { calAmplifierSums } from "@/lib/damage/amplifier";
import { Items } from "@/lib/type";
import { Amplifier } from "@/lib/type/amplifier";
import { keysOf, round } from "@/lib/utils";

const Row = ({
  item,
  name,
  amplifier,
}: {
  item: string;
  name: string;
  amplifier: Amplifier;
}) => {
  const amplifierSums = calAmplifierSums(stores.edit.state(), {
    uptime: true,
  });
  const pct = amplifierSums[item as Items<"Weapons">][amplifier] * 100;

  return (
    <>
      <span className="col-span-7 font-semibold">{name}</span>
      <span className="col-span-4 font-semibold text-info">
        {round(pct, 0).toLocaleString()} %
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
      {keysOf(SCHEMA.Weapons).map(
        (item, i) =>
          baseDamageReady(item) && (
            <ItemCard key={i} category={section} item={item}>
              <div className="col-span-12 grid grid-cols-12 p-0 text-right">
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
