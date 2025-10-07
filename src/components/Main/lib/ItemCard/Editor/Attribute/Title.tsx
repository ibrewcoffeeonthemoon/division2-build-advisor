import { Attribute } from "@/lib/type";
import { round } from "@/lib/utils";

type Props = {
  attribute: Attribute;
  open: boolean;
};

export const Title = ({ attribute, open }: Props) => {
  return (
    <div className="col-span-12 grid grid-cols-12 items-center text-center text-info font-light">
      {open ? (
        <></>
      ) : (
        <>
          <h2 className="col-span-7">{attribute.name}</h2>
          <h2 className="col-span-2">
            {attribute.value && round(attribute.value * 100, 2)}
          </h2>
          <h2 className="col-span-2">
            {attribute.uptime && round(attribute.uptime * 100, 0)}
          </h2>
        </>
      )}
    </div>
  );
};
