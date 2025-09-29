"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Top() {
  const [dark, setDark] = useState(true);
  const toggleDark = () => setDark(!dark);

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div
      className="
        grid grid-cols-3
        text-center bg-orange-600 font-bold
        px-4 py-3
      "
    >
      <div className="flex-1 flex flex-row justify-start items-center">
        <button onClick={() => alert(currentUrl)}>
          <img
            src="/icon-192.png"
            alt="Logo"
            className="h-7 w-7 rounded-full"
          />
        </button>
      </div>
      <div className="flex-1 flex flex-row justify-center items-center">
        <h1 className="text-xl font-bold">Build Title</h1>
      </div>
      <div className="flex-1 flex flex-row justify-end items-center">
        <button
          onClick={toggleDark}
          className="rounded-full hover:bg-orange-400 dark:hover:bg-orange-700 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {dark ? (
            <MoonIcon className="w-7 h-7 text-zinc-600" />
          ) : (
            <SunIcon className="w-7 h-7 text-yellow-200" />
          )}
        </button>
      </div>
    </div>
  );
}
