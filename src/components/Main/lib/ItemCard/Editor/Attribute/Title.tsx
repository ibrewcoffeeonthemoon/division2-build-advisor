import { Attribute } from "@/lib/type";

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
          <h2 className="col-span-2">{(attribute.value * 100).toFixed(1)}</h2>
          <h2 className="col-span-2">{(attribute.uptime * 100).toFixed(0)}</h2>
        </>
      )}
    </div>
  );
};
