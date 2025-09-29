import Dock from "@/components/Dock";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div
      className="
        h-full w-full fixed self-auto
        grid-cols-1 place-items-center
        text-center 
      "
    >
      <div
        className="
          h-full w-full md:max-w-xl
          flex flex-col
        "
      >
        <NavBar />
        <Main />
        <Dock />
      </div>
    </div>
  );
}
