import Bottom from "@/components/Bottom";
import Dock from "@/components/Dock";
import Main from "@/components/Main";
import Top from "@/components/Top";

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
        <Top />
        <Main />
        <Dock />
      </div>
    </div>
  );
}
