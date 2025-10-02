import {
  StopCircleIcon,
  Cog8ToothIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";
import { ItemCard } from "../lib/Card";
import { ItemAttribute } from "../lib/Attribute";

type Props = {
  category: string;
  name: string;
};

export default function Card({ category, name }: Props) {
  return (
    <ItemCard
      itemAttrs={
        <table className="table-auto">
          <tbody>
            <ItemAttribute
              icon={<StopCircleIcon className="text-red-500" />}
              field="Weapon Damage"
              val="15%"
            />
            <ItemAttribute
              icon={<StopCircleIcon className="text-red-500" />}
              field="Critical Hit Damage"
              val="15%"
            />
            <ItemAttribute
              icon={<StopCircleIcon className="text-red-500" />}
              field="Critical Hit Chance"
              val="6%"
            />
            <ItemAttribute
              icon={<Cog8ToothIcon className="text-red-500" />}
              field="Headshot Damage"
              val="6%"
            />
            <ItemAttribute
              icon={<CubeIcon className="text-base-content" />}
              field="Headshot Damage"
              val="6%"
            />
          </tbody>
        </table>
      }
      {...{ category, name }}
    />
  );
}
