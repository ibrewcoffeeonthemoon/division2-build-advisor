import { Build } from "@/lib/type";
import { Fragment } from "react";

export default function BuildCard({
  key,
  build,
}: {
  key: number;
  build: Build;
}) {
  return (
    <div key={key} className="card">
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
              <span className="col-span-6">{"48,500"}</span>
              <span className="col-span-3">{"850"}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
