"use client";

import Main from "@/components/Main";
import Bottom from "@/components/Bottom";
import Top from "@/components/Top";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Top />
      <Main />
      <Bottom />
    </div>
  );
}
