"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, Bars3Icon } from "@heroicons/react/24/solid";

export default function NavBar() {
  const [dark, setDark] = useState(true);
  const toggleDark = () => setDark(!dark);

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (dark) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.setAttribute("data-theme", "light");
  }, [dark]);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div
      className="
        navbar bg-base-100 shadow-sm
        grid grid-cols-3
        px-4
      "
    >
      <div className="flex-1 flex flex-row justify-start items-center">
        <Bars3Icon className="h-7 w-7" />
      </div>
      <div className="flex-1 flex flex-row justify-center items-center">
        <button onClick={() => alert(currentUrl)}>
          <img
            src="/icon-192.png"
            alt="Logo"
            className="h-7 w-7 rounded-full"
          />
        </button>
      </div>
      <div className="flex-1 flex flex-row justify-end items-center">
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
      </div>
    </div>
  );
}
