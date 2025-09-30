"use client";

import { store } from "@/store";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export const Alert = () => {
  const currentUrl = store.app.currentUrl();
  const setCurrentUrl = store.app.setCurrentUrl();
  const showAlert = store.ui.NavBar.showAlert();
  const setShowAlert = store.ui.NavBar.setShowAlert();

  useEffect(() => {
    if (showAlert) {
      setCurrentUrl(window.location.href);

      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [setCurrentUrl, showAlert, setShowAlert]);

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
