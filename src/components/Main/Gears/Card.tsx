type Props = {
  name: string;
};

export default function Card({ name }: Props) {
  return (
    <div
      className="
        card card-sm bg-accent/20 shadow-sm
        m-1
        text-xl font-bold
      "
    >
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
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
      </div>
    </div>
  );
}
