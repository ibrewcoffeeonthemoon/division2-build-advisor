"use client";

import { stores } from "@/store";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export const Alert = () => {
  const currentUrl = stores.app.currentUrl();
  const setCurrentUrl = stores.app.setCurrentUrl();
  const showAlert = stores.ui.NavBar.showAlert();
  const setShowAlert = stores.ui.NavBar.setShowAlert();

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
