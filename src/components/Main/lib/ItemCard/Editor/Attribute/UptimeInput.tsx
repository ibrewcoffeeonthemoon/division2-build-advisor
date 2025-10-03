export const UptimeInput = () => {
  return (
    <label className="input input-ghost input-md w-full items-center col-span-2">
      <input
        type="number"
        className="grow text-center"
        placeholder="Uptime"
        onFocus={(e) => e.currentTarget.select()}
        defaultValue={1.0}
      />
    </label>
  );
};
