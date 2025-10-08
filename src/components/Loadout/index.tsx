"use client";

import { store } from "@/store/loadout";
import BuildCard from "./BuildCard";

export default function Loadout() {
  const builds = store.state().builds;

  return (
    <div className="flex-grow overflow-auto flex flex-col">
      {builds.map((build, i) => (
        <BuildCard key={i} index={i} build={build} />
      ))}
    </div>
  );
}
