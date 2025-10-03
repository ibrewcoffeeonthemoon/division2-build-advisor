import { Attribute } from "../Attribute";

export type SummaryProps = {
  category: string;
  name: string;
  attributes: Attribute[];
};

export const Summary = ({ category, name, attributes }: SummaryProps) => {
  return (
    <div className="flex flex-row">
      <div className="">
        <table className="table-auto">
          <tbody>
            {attributes.map(({ type, name, value, uptime }, i) => (
              <tr key={i} className="">
                <td className="pl-2">{type}</td>
                <td className="pl-2">{value}</td>
                <td className="pl-2">{name}</td>
                <td className="pl-2">{uptime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex-grow" />
      <div className="text-right">
        <h2 className="text-lg font-semibold">{category}</h2>
        <h2 className="text-primary font-semibold">{name}</h2>
      </div>
    </div>
  );
};
