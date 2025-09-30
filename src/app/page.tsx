import Dock from "@/components/Dock";
import Drawer from "@/components/Drawer";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div
      className="
        h-full w-full fixed self-auto
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
        <Drawer />
        <Main />
        <Dock />
      </div>
    </div>
  );
}
