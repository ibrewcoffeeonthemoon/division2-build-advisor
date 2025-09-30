import { SparklesIcon } from "@heroicons/react/24/outline";

export default function ThemeButton() {
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
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
