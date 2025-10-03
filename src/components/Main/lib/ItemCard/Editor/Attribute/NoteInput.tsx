export const NoteInput = () => {
  return (
    <label className="input input-ghost w-full col-span-9">
      Note
      <input
        type="text"
        className="grow"
        placeholder="Remarks"
        onFocus={(e) => e.currentTarget.select()}
        defaultValue=""
      />
    </label>
  );
};
