import { Build } from "@/lib/type";
import { round } from "@/lib/utils";
import { Fragment } from "react";

export default function BuildCard({ build }: { build: Build }) {
  const format = (x?: number | null) => (x ? round(x, 0).toLocaleString() : "");

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{build.name}</div>
        <div className="grid grid-cols-24">
          <span className="col-span-10 col-start-6 font-semibold">Name</span>
          <span className="col-span-6 font-semibold">DMG</span>
          <span className="col-span-3 font-semibold">RPM</span>
          {Object.entries(build.items.Weapons).map(([key, item], i) => (
            <Fragment key={i}>
              <span className="col-span-5 col-start-1 font-semibold">
                {key}
              </span>
              <span className="col-span-10 font-semibold text-primary">
                {item.name}
              </span>
              <span className="col-span-6">{format(item.baseDamage)}</span>
              <span className="col-span-3">{format(item.rpm)}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
