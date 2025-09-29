"use client";

import React, { useEffect, useState } from "react";

export default function Bottom() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div
      className={`
        text-center bg-orange-600
        px-1 py-1
      `}
    >
      <p className="text-sm">{currentUrl}</p>
    </div>
  );
}
