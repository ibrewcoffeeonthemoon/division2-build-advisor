export default function Home() {
  return (
    <div
      className={`
        flex flex-col 
        text-center 
        h-screen
      `}
    >
      <span className=" text-4xl text-center bg-orange-500 ">Top</span>
      <div className="flex-1 flex flex-col justify-center">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
      <span className="text-3xl bg-orange-500">Bottom</span>
    </div>
  );
}
