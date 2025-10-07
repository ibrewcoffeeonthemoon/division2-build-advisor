"use client";

import Image from "next/image";
import ThemeButton from "./ThemeButton";
import Link from "next/link";
import { stores } from "@/store/ui";

export default function NavBar() {
  const setActiveButton = stores.Dock.setActiveButton();

  return (
    <div>
      <div
        className="
        navbar bg-base-200 shadow-sm border-y-2 border-base-300
        grid grid-cols-3
        px-4
      "
      >
        <div className="flex-1 flex flex-row items-center">
          <Link href="/" onClick={() => setActiveButton(null)}>
            <Image
              src="/icon-192.png"
              width="192"
              height="192"
              alt="Logo"
              className="h-7 w-7 rounded-full"
            />
          </Link>
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
    </div>
  );
}
