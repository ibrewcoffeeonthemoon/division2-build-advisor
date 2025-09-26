import Bottom from "@/components/Bottom";
import Main from "@/components/Main";
import Top from "@/components/Top";

export default function Home() {
  return (
    <div
      className={`
        h-full w-full fixed self-auto
        flex flex-col 
        text-center 
      `}
    >
      <Top />
      <Main />
      <Bottom />
    </div>
  );
}
