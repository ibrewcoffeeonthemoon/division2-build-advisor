"use client";

import Image from "next/image";
import { Alert } from "./Alert";
import ThemeButton from "./ThemeButton";
import { store } from "@/store/ui/NavBar";

export default function NavBar() {
  const showAlert = store.showAlert();
  const toggleShowAlert = store.toggleShowAlert();

  return (
    <div>
      <div
        className="
        navbar bg-base-100 shadow-sm
        grid grid-cols-3
        px-4
      "
      >
        <div className="flex-1 flex flex-row items-center">
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
        <div className="flex-1 justify-center items-center">
          <h1 className="font-xl font-bold text-center align-middle">
            Awesome Build
          </h1>
        </div>
        <div className="flex-1 flex flex-row justify-end items-center gap-2">
          <ThemeButton />
        </div>
      </div>
      {showAlert && <Alert />}
    </div>
  );
}
