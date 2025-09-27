"use client";

import { useEffect, useState } from "react";

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
        px-5 py-3
      `}
    >
      <h1 className="text-4xl">Division 2</h1>
      <nav className="flex gap-4">
        <a href="#">Build</a>
        <a href="#">Stats</a>
        <button onClick={toggleDark}>{dark ? "Dark" : "Light"}</button>
      </nav>
    </div>
  );
}
