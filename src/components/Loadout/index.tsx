"use client";

import { store } from "@/store/loadout";

export default function Loadout() {
  const builds = store.state().builds;

  return (
    <div className="flex-grow overflow-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl">Loadout</h1>
      {builds.map((build, i) => (
        <div key={i}>{build.name}</div>
      ))}
    </div>
  );
}
