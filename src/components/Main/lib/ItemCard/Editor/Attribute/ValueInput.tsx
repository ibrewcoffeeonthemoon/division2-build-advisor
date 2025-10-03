export const ValueInput = () => {
  return (
    <label className="input input-ghost input-md w-full items-center col-span-3">
      <input
        type="number"
        className="grow text-center"
        placeholder="Value"
        onFocus={(e) => e.currentTarget.select()}
        defaultValue={0.0}
      />
    </label>
  );
};
