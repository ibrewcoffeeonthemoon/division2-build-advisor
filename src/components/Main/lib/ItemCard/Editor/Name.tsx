export const Input = () => {
  return (
    <label className="input input-neutral w-full col-span-12">
      <span className="font-bold">Name</span>
      <input
        type="text"
        className="grow text-primary font-bold pl-1"
        placeholder=">>>"
        onFocus={(e) => e.currentTarget.select()}
      />
      <span className="badge badge-ghost badge-xs">Required</span>
    </label>
  );
};
