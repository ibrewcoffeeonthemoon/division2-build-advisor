"use client";

import { store } from "@/store/loadout";

export default function Loadout() {
  const builds = store.state().builds;

  return (
    <div className="flex-grow overflow-auto flex flex-col">
      {builds.map((build, i) => (
        <div key={i} className="card">
          <div className="card-body">
            <div className="card-title">{build.name}</div>
            <div className="">Attribute</div>
            <div className="">Attribute</div>
            <div className="">Attribute</div>
          </div>
        </div>
      ))}
    </div>
  );
}
