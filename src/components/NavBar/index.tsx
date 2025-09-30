"use client";

import { useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { store } from "@/store";
import { Alert } from "./Alert";
import { DarkToggleButton } from "./DarkToggleButton";

export default function NavBar() {
  const { showAlert, toggleShowAlert } = store.ui.NavBar.useStore();
  const { setCurrentUrl } = store.app.useStore();

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div>
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
          <button onClick={toggleShowAlert}>
            <Image
              src="/icon-192.png"
              width="192"
              height="192"
              alt="Logo"
              className="h-7 w-7 rounded-full"
            />
          </button>
        </div>
        <div className="flex-1 flex flex-row justify-end items-center">
          <DarkToggleButton />
        </div>
      </div>
      {showAlert && <Alert />}
    </div>
  );
}
