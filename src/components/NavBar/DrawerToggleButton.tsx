import { Bars3Icon } from "@heroicons/react/24/solid";

export default function DrawerToggleButton() {
  return (
    <label htmlFor="drawer" className="drawer-button">
      <Bars3Icon className="h-7 w-7" />
    </label>
  );
}
