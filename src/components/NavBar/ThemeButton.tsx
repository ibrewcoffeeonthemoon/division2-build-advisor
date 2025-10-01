import { stores } from "@/store";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "caramellatte",
  "abyss",
  "silk",
];

const Dot = ({ fg, bg, char }: { char: string; fg: string; bg: string }) => (
  <div
    className={`
      ${fg} ${bg}
      flex items-center justify-center aspect-square w-5
      text-sm font-bold rounded-full
    `}
  >
    {char}
  </div>
);

export const PreviewBox = ({ theme }: { theme: string }) => {
  const appTheme = stores.app.theme();

  return (
    <>
      <div
        className={`
          h-full w-2.5 rounded-full
          ${theme === appTheme ? "bg-primary" : "bg-transparent"}
        `}
      />
      <div
        data-theme={theme}
        className={`
        flex flex-row gap-4 items-center justify-between 
        w-60 p-1 rounded-md
      `}
      >
        <div
          className="
          flex flex-row gap-1 rounded-md p-2
          bg-base-100 text-base-content
        "
        >
          {/* use full daisyui or tailwindcss names for the class to be detected or included */}
          <Dot char="P" fg="bg-primary" bg="text-primary-content" />
          <Dot char="S" fg="bg-secondary" bg="tebg-secondary-content" />
          <Dot char="A" fg="bg-accent" bg="text-accent-content" />
          <Dot char="N" fg="bg-neutral" bg="text-neutral-content" />
        </div>
        <div className="font-bold p-1">{theme}</div>
      </div>
    </>
  );
};

export default function ThemeButton() {
  const theme = stores.app.theme();
  const setTheme = stores.app.setTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <button
        tabIndex={0}
        className="
          btn btn-circle
          flex items-center justify-center
        "
      >
        <SparklesIcon className="w-7 h-7" />
      </button>
      <div
        className="
          h-[60vh] 
          dropdown-content rounded-box
          overflow-x-hidden overflow-y-auto
        "
      >
        <ul
          tabIndex={0}
          className="menu bg-base-200 rounded-box z-1 p-2 shadow-sm"
        >
          {themes.map((name, i) => (
            <li key={i}>
              <button
                onClick={(e) => {
                  setTheme(name);
                  // close dropdown on selected
                  const button = e.currentTarget;
                  setTimeout(() => {
                    button.blur();
                  }, 500);
                }}
              >
                <PreviewBox theme={name} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
