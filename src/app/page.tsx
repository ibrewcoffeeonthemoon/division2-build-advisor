"use client";

import Dock from "@/components/Dock";
import NavBar from "@/components/NavBar";
import { store } from "@/store/app";
import { useEffect } from "react";

export default function Home() {
  const currentUrl = store.currentUrl();
  const setCurrentUrl = store.setCurrentUrl();

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [setCurrentUrl]);

  return (
    <div
      className="
        h-full w-full self-auto
        grid-cols-1 place-items-center
      "
    >
      <div
        className="
          h-full w-full md:max-w-xl
          flex flex-col
        "
      >
        <NavBar />
        <div className="flex-grow overflow-auto flex flex-col justify-center items-center">
          <h1 className="text-2xl text-neutral font-semibold">Division 2</h1>
          <h1 className="text-4xl text-neutral font-bold">Build Advisor</h1>
          <a
            className="link link-info text-sm text-center w-1/2 break-all whitespace-normal wrap-anywhere"
            href={currentUrl}
          >
            {currentUrl}
          </a>
        </div>
        <div className="flex justify-center pb-5">
          <button
            className="btn btn-ghost text-error"
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure to clear all data and reset this app?",
                )
              ) {
                localStorage.clear();
                window.location.reload();
              }
            }}
          >
            Reset App
          </button>
        </div>
        <Dock />
      </div>
    </div>
  );
}
