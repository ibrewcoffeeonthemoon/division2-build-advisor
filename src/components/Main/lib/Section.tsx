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
    <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
      {control}
      <div className="collapse-title p-3 text-center font-semibold">{name}</div>
      <div className="collapse-content text-sm">{children}</div>
    </div>
  );
};
