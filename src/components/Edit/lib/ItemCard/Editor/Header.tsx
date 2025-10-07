export const Header = () => {
  const className = "pt-2 size-full text-sm text-center text-nowrap font-bold";
  return (
    <>
      <span className={`col-span-7 ${className}`}>Attribute</span>
      <span className={`col-span-2 ${className}`}>Value %</span>
      <span className={`col-span-2 ${className}`}>Uptime %</span>
    </>
  );
};
