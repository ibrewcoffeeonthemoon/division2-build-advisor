import { Build } from "@/lib/type";

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
        <div className="">Attribute</div>
        <div className="">Attribute</div>
        <div className="">Attribute</div>
      </div>
    </div>
  );
}
