import Bottom from "@/components/Bottom";
import Main from "@/components/Main";
import Top from "@/components/Top";

export default function Home() {
  return (
    <div
      className={`
        flex flex-col 
        text-center 
        h-screen
      `}
    >
      <Top />
      <Main />
      <Bottom />
    </div>
  );
}
