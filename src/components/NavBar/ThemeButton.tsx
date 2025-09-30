import { store } from "@/store";
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

export const PreviewBox = ({ name }: { name: string }) => {
  return <div data-theme={name} className="w-4 h-4 rounded bg-base-100" />;
};

export default function ThemeButton() {
  const theme = store.app.theme();
  const setTheme = store.app.setTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <button
        tabIndex={0}
        className="
          rounded-full hover:bg-primary-content
          flex items-center justify-center
        "
      >
        <SparklesIcon className="w-7 h-7" />
      </button>
      <div
        className="
          dropdown-content 
          h-[80vh] overflow-x-hidden overflow-y-auto
        "
      >
        <ul
          tabIndex={0}
          className="menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          {themes.map((name, i) => (
            <li key={i}>
              <button onClick={() => setTheme(name)}>
                <PreviewBox name={name} />
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
