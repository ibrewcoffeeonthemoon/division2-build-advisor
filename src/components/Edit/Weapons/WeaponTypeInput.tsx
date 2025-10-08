import { WEAPON_TYPES } from "@/lib/constant";
import { WeaponType } from "@/lib/type";
import { store } from "@/store/data";

type Props<S, C> = {
  section: S;
  item: C;
};

export const WeaponTypeInput = <S extends string, C extends string>({
  section,
  item,
}: Props<S, C>) => {
  const weaponType = store.state().items[section][item].weaponType;
  const setWeaponType = store.setWeaponType();

  return (
    <div className="col-span-6 flex flex-row items-baseline px-3">
      <span className="text-sm font-semibold">Type</span>
      <select
        className="select select-ghost col-span-4 w-full text-primary"
        value={weaponType ?? ""}
        onChange={(e) =>
          setWeaponType(section, item, e.currentTarget.value as WeaponType)
        }
      >
        <option disabled={true}>Weapon Type</option>
        {WEAPON_TYPES.map((name, i) => (
          <option key={i}>{name}</option>
        ))}
      </select>
    </div>
  );
};
