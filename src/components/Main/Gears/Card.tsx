import { ItemCard } from "../lib/Card";

type Props = {
  name: string;
};

export default function Card({ name }: Props) {
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
      itemDesc={<h2 className="card-title">{name}</h2>}
    />
  );
}
