import { WEAPON_TYPES } from "@/lib/constant/weapon";
import { WeaponType } from "@/lib/type/weapon";
import { store } from "@/store/edit";
import { SectionName, TopicName } from "@/store/edit/state";

type Props<C, M> = {
  category: C;
  item: M;
};

export const WeaponTypeInput = <C extends SectionName, M extends TopicName<C>>({
  category,
  item,
}: Props<C, M>) => {
  const weaponType = store.state().items[category][item].weaponType;
  const setWeaponType = store.action().item.setWeaponType;

  return (
    <div className="col-span-6 flex flex-row items-baseline px-3">
      <span className="text-sm font-semibold">Type</span>
      <select
        className="select select-ghost col-span-4 w-full text-primary"
        value={weaponType ?? ""}
        onChange={(e) =>
          setWeaponType(category, item, e.currentTarget.value as WeaponType)
        }
      >
        <option disabled={true}>Weapon Type</option>
        {WEAPON_TYPES.map((name, i) => (
          <option key={i} value={name}>
            {name}
          </option>
        ))}
        <option value="">None</option>
      </select>
    </div>
  );
};
