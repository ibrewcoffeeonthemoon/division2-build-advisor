import { ReactNode } from "react";

export const Section = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  return (
    <details
      className="collapse collapse-arrow bg-base-100 border-base-300 border"
      open
    >
      <summary className="collapse-title font-semibold">{name}</summary>
      <div className="collapse-content text-sm">{children}</div>
    </details>
  );
};
