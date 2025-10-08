import { stores } from "@/store";

export const Title = () => {
  const activeButton = stores.ui.Dock.activeButton();
  const buildName = stores.data.state().name;

  return (
    <div className="flex-1 justify-center items-center">
      <h1 className="font-xl font-bold text-center align-middle">
        {activeButton === 1 ? buildName : "Build Advisor"}
      </h1>
    </div>
  );
};
