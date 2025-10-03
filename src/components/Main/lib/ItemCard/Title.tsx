import { XMarkIcon } from "@heroicons/react/24/solid";

export type TitleProps = {
  category: string;
};

export const Title = ({ category }: TitleProps) => {
  return (
    <div className="flex flex-row items-center">
      <XMarkIcon className="size-5" />
      <div className="flex-grow" />
      <h2 className="text-lg font-semibold gap-0.5">{category}</h2>
    </div>
  );
};
