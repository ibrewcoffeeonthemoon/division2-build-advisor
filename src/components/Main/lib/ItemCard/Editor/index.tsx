import { Header, Input, NameInput } from "./Input";

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
