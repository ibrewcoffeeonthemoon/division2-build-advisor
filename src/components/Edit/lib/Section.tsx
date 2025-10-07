"use client";
import { ReactNode } from "react";

export const Section = ({
  name,
  control,
  children,
}: {
  name: string;
  control: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="collapse collapse-arrow bg-base-100 border-y-1 border-base-300 rounded-none">
      {control}
      <div className="collapse-title p-3 bg-base-200 text-center font-semibold">
        {name}
      </div>
      <div className="collapse-content bg-base-100 px-0 shadow-accent">
        {children}
      </div>
    </div>
  );
};
