import Dock from "@/components/Dock";
import Edit from "@/components/Edit";
import NavBar from "@/components/NavBar";

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
        <Edit />
        <Dock />
      </div>
    </div>
  );
}
