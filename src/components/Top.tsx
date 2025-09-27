"use client";

export default function Top() {
  return (
    <div
      className={`
        flex flex-row justify-between items-center
        text-center bg-orange-600 font-bold
        px-5 py-3
      `}
    >
      <h1 className="text-4xl">Division 2</h1>
      <nav className="flex gap-4">
        <a href="#">Build</a>
        <a href="#">Stats</a>
        <button
          onClick={() => document.documentElement.classList.toggle("dark")}
        >
          Light/Dark
        </button>
      </nav>
    </div>
  );
}
