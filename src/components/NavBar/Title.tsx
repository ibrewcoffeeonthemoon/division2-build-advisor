import { stores } from "@/store";

export const Title = () => {
  const activeButton = stores.ui.Dock.state().activeButton;
  const buildName = stores.edit.state().name;
  const titles = ["Loadout", buildName, "Stats"];
  const title = activeButton === null ? "" : titles[activeButton];

  return (
    <div className="grow justify-center items-center">
      <h1 className="font-xl font-bold text-center align-middle">{title}</h1>
    </div>
  );
};
