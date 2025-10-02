export const NameInput = () => {
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

export const Header = () => {
  const headers = ["Amplifier", "Attribute", "Value", "Uptime"];
  return (
    <>
      {headers.map((header, i) => (
        <span className="col-span-3 pt-2 size-full text-center text-accent-content">
          {header}
        </span>
      ))}
    </>
  );
};

const Input = () => {
  return (
    <div className="col-span-12 grid grid-cols-12 items-center">
      <select
        className="select select-ghost w-auto col-span-3"
        defaultValue="WD"
      >
        <option disabled={true}>Amplifier</option>
        <option>WD</option>
        <option>TWD</option>
        <option>Amp</option>
      </select>
      <select
        className="select select-ghost w-auto col-span-3"
        defaultValue="WD"
      >
        <option disabled={true}>Attribute</option>
        <option>CHC</option>
        <option>CHD</option>
        <option>HS</option>
      </select>

      <label className="grow input input-ghost input-md w-full items-center col-span-3">
        <input type="text" className="grow" placeholder="Value" />
      </label>
      <label className="grow input input-ghost input-md w-full items-center col-span-3">
        <input
          type="text"
          className="grow"
          placeholder="Uptime"
          defaultValue={1.0}
        />
      </label>
    </div>
  );
};

export const Editor = () => {
  return (
    <div className="grid grid-cols-12 collapse-content px-3">
      <NameInput />
      <Header />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
};
