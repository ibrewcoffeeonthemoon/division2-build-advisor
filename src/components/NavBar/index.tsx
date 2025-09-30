"use client";

import Image from "next/image";
import { store } from "@/store";
import { Alert } from "./Alert";
import { DarkToggleButton } from "./DarkToggleButton";
import DrawerToggleButton from "./DrawerToggleButton";
import ThemeButton from "./ThemeButton";

export default function NavBar() {
  const showAlert = store.ui.NavBar.showAlert();
  const toggleShowAlert = store.ui.NavBar.toggleShowAlert();

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
          <DrawerToggleButton />
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
        <div className="flex-1 flex flex-row justify-end items-center gap-2">
          <ThemeButton />
          <DarkToggleButton />
        </div>
      </div>
      {showAlert && <Alert />}
    </div>
  );
}
