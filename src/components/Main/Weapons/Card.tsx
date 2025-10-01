import { ItemCard } from "../lib/Card";

type Props = {
  category: string;
  name: string;
};

export default function Card({ category, name }: Props) {
  return (
    <ItemCard
      itemAttrs={
        <p>
          Core Attributes: WD 15%
          <br />
          Minor Attributes CHD 15%
          <br />
          Minor Attributes CHC 6%
          <br />
          Mods HS 6%
          <br />
          Talents HS 6%
        </p>
      }
      itemDesc={
        <div className="text-right">
          <h2 className="card-title">{category}</h2>
          <h2>{name}</h2>
        </div>
      }
    />
  );
}
