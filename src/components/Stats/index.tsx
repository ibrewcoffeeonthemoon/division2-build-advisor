"use client";

import { calDamage } from "@/lib/damage";
import { store } from "@/store/data";
import Damage from "./Damage";

export default function Stats() {
  const { dmgRecord, dpsRecord } = calDamage("Primary", store.state());
  const dmg = dmgRecord.normal.bodyshot.health.nocover;
  const dps = dpsRecord.normal.bodyshot.health.nocover;

  return (
    <div className="flex-grow overflow-auto">
      <Damage />
    </div>
  );
}
