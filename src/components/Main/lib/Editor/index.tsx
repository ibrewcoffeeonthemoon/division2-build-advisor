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
  const headers = [
    ["Name", "col-span-4"],
    ["Attribute", "col-span-4"],
    ["Value", "col-span-2"],
    ["Uptime", "col-span-2"],
  ];
  return (
    <>
      {headers.map(([header, style], i) => (
        <span
          key={i}
          className={`${style} pt-2 size-full text-center text-accent-content`}
        >
          {header}
        </span>
      ))}
    </>
  );
};

const Input = () => {
  return (
    <div className="col-span-12 grid grid-cols-12 items-center">
      <input
        className="input input-ghost col-span-4"
        type="text"
        placeholder="Name"
        list="common-names"
      />
      <datalist id="common-names">
        <option value="RedCore"></option>
        <option value="Firefox"></option>
        <option value="Safari"></option>
        <option value="Opera"></option>
        <option value="Edge"></option>
      </datalist>
      <select
        className="select select-ghost w-auto col-span-4"
        defaultValue="WD"
      >
        <option disabled={true}>Attribute</option>
        <option>CHC</option>
        <option>CHD</option>
        <option>HS</option>
      </select>

      <label className="grow input input-ghost input-md w-full items-center col-span-2">
        <input type="text" className="grow" placeholder="Value" />
      </label>
      <label className="grow input input-ghost input-md w-full items-center col-span-2">
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
