type Props<S, C> = {
  section: S;
  item: C;
};

export const BaseDamage = <S extends string, C extends string>({
  section,
  item,
}: Props<S, C>) => {
  return (
    <label className="input input-ghost w-full col-span-7">
      <span className="font-semibold">Base Damage</span>
      <input
        type="number"
        className="grow text-primary pl-1"
        placeholder="<<<"
        onFocus={(e) => e.currentTarget.select()}
      />
    </label>
  );
};
