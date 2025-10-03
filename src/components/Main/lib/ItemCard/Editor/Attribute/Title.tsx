import { Attribute } from "@/lib/type";

export const Title = ({ attribute }: { attribute: Attribute }) => {
  return (
    <>
      <h2 className="col-span-7 w-full text-center">{attribute.name}</h2>
      <h2 className="col-span-3 w-full text-center">{attribute.value}</h2>
      <h2 className="col-span-2 w-full text-center">{attribute.uptime}</h2>
    </>
  );
};
