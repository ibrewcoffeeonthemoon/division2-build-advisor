"use client";

import { useEffect, useState } from "react";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useStore } from "@/store/ui/NavBar";

export const Alert = ({ currentUrl }: { currentUrl: string }) => {
  const { showAlert, setShowAlert } = useStore();
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showAlert, setShowAlert]);

  return (
    <div
      role="alert"
      className="alert alert-success alert-soft"
      onClick={() => setShowAlert(false)}
    >
      <InformationCircleIcon className="w-6 h-6" />
      <span>{currentUrl}</span>
    </div>
  );
};

export default function NavBar() {
  const [dark, setDark] = useState(true);
  const toggleDark = () => setDark(!dark);
  const { showAlert, toggleShowAlert } = useStore();
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (dark) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.setAttribute("data-theme", "light");
  }, [dark]);

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
      {showAlert && <Alert {...{ currentUrl }} />}
    </div>
  );
}
