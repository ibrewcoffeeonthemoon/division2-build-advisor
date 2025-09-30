"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { store } from "@/store";
import { useEffect } from "react";

export const DarkToggleButton = () => {
  const { dark, toggleDark } = store.app.useStore();

  useEffect(() => {
    if (dark) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.setAttribute("data-theme", "light");
  }, [dark]);

  return (
    <button
      onClick={toggleDark}
      className="
            rounded-full hover:bg-primary-content dark:hover:bg-primary
            flex items-center justify-center
          "
      aria-label="Toggle theme"
    >
      {dark ? (
        <MoonIcon className="w-7 h-7" />
      ) : (
        <SunIcon className="w-7 h-7" />
      )}
    </button>
  );
};
