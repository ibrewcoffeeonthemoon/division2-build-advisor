import { Input, NameInput } from "./Input";

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
