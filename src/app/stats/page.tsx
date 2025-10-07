import Dock from "@/components/Dock";
import NavBar from "@/components/NavBar";
import Stats from "@/components/Stats";

export default function page() {
  return (
    <div
      className="
        h-full w-full self-auto
        grid-cols-1 place-items-center
      "
    >
      <div
        className="
          h-full w-full md:max-w-xl
          flex flex-col
        "
      >
        <NavBar />
        <Stats />
        <Dock />
      </div>
    </div>
  );
}
