"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Area */}
      <main className="flex-1 flex flex-col" id="main">
        <div className="flex-1 flex flex-col text-center">
          {/* Title */}
          <h1 className="text-4xl p-4">Build</h1>
          {/* Content */}
          <div
            className="flex-1 flex flex-col justify-around items-stretch"
            id="content"
          >
            <p className="">Content Content Content Content</p>
            <p className="">Content Content Content Content</p>
            <p className="">Content Content Content Content</p>
            <p className="">Content Content Content Content</p>
          </div>
        </div>
      </main>
      {/* Nav Bar */}
      <nav className="border-b" id="nav">
        <div className="flex justify-evenly h-16">
          <Button className="flex-1" variant="ghost">
            Build
          </Button>
          <Button className="flex-1" variant="ghost">
            Stats
          </Button>
          <Button className="flex-1" variant="ghost">
            Settings
          </Button>
        </div>
      </nav>
    </div>
  );
}
