const Slot = ({ name }: { name: string }) => {
  return (
    <div
      className={`
        h-40 py-2 px-1 m-2
        rounded-2xl
        bg-orange-400 text-2xl font-bold
      `}
    >
      {name}
    </div>
  );
};

export default function Main() {
  return (
    <div
      className={`
        flex-1
        grid grid-cols-2 items-center content-start
        overflow-auto
      `}
    >
      <Slot name="Mask" />
      <Slot name="Backpack" />
      <Slot name="Chest" />
      <Slot name="Gloves" />
      <Slot name="Holster" />
      <Slot name="Kneepads" />
    </div>
  );
}
