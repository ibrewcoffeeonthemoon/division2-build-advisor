import { TrashIcon } from "@heroicons/react/24/outline";

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
    ["Attribute", "col-span-7"],
    ["Value %", "col-span-3"],
    ["Uptime %", "col-span-2"],
  ];
  return (
    <>
      {headers.map(([header, style], i) => (
        <span
          key={i}
          className={`${style} pt-2 size-full text-center font-bold`}
        >
          {header}
        </span>
      ))}
    </>
  );
};

export const Input = () => {
  return (
    <div
      tabIndex={0}
      className="collapse col-span-12 p-1.5 m-0 overflow-visible border-1 border-base-300 duration-1000"
    >
      <div className="collapse-title p-0 ps-0 pe-0">
        <div className="col-span-12 grid grid-cols-12 items-center">
          <select
            className="select select-ghost col-span-7 z-10"
            defaultValue="Weapon Damage"
          >
            <option disabled={true}>Attribute</option>
            <option>Weapon Damage</option>
            <option>Critical Hit Chance</option>
            <option>Critical Hit Damage</option>
            <option>Headshot Damage</option>
          </select>
          <label className="input input-ghost input-md w-full items-center col-span-3">
            <input
              type="number"
              className="grow text-center"
              placeholder="Value"
              onFocus={(e) => e.currentTarget.select()}
              defaultValue={0.0}
            />
          </label>
          <label className="input input-ghost input-md w-full items-center col-span-2">
            <input
              type="number"
              className="grow text-center"
              placeholder="Uptime"
              onFocus={(e) => e.currentTarget.select()}
              defaultValue={1.0}
            />
          </label>
        </div>
      </div>
      <div className="collapse-content !p-0 pb-0 ps-0 pe-0 grid grid-cols-12">
        <select
          className="select select-ghost col-span-3"
          defaultValue="Attribute"
        >
          <option disabled={true}>Type</option>
          <option>Attribute</option>
          <option>Mod</option>
          <option>Talent</option>
        </select>
        <label className="input input-ghost w-full col-span-9">
          Name
          <input
            type="text"
            className="grow"
            placeholder="Remarks"
            onFocus={(e) => e.currentTarget.select()}
            defaultValue=""
          />
        </label>
        <div className="col-span-12 flex justify-center">
          <button
            tabIndex={0}
            className="
            btn btn-circle btn-ghost text-error
            flex items-center justify-center
          "
          >
            <TrashIcon className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};
