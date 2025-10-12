const Row = ({ text }: { text: string }) => {
  return <span className="col-span-12">{text}</span>;
};

export default function Multiplier() {
  return (
    <div className="collapse collapse-arrow col-span-12 p-1.5 m-0 border-1 border-base-300 duration-1000">
      <input type="checkbox" />
      <div className="collapse-title p-0 ps-0 pe-0 grid grid-cols-12">
        <span className="col-span-12 font-semibold p-1 text-center">
          Multiplier
        </span>
      </div>
      <div className="collapse-content !p-0 pb-0 ps-0 pe-0 grid grid-cols-12">
        <Row text="1 + WD (0.15)" />
        <Row text="1 + WD (0.15)" />
        <Row text="1 + WD (0.15)" />
        <Row text="1 + WD (0.15)" />
      </div>
    </div>
  );
}
