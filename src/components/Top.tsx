"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Top() {
  const [dark, setDark] = useState(true);
  const toggleDark = () => setDark(!dark);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div
      className={`
        flex flex-row justify-between items-center
        text-center bg-orange-600 font-bold
        px-4 py-2
      `}
    >
      <h1 className="text-2xl">Division 2</h1>
      <nav className="flex flex-row items-center gap-4">
        <a href="#">Build</a>
        <a href="#">Stats</a>
        <button
          onClick={toggleDark}
          className="p-1 rounded-full hover:bg-orange-400 dark:hover:bg-orange-700 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {dark ? (
            <MoonIcon className="w-7 h-7 text-zinc-600" />
          ) : (
            <SunIcon className="w-7 h-7 text-yellow-200" />
          )}
        </button>
      </nav>
    </div>
  );
}
