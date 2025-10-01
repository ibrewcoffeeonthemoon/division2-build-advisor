import NavBar from "@/store/ui/NavBar";
import Weapons from "@/store/ui/Main/Weapons";
import Gears from "@/store/ui/Main/Gears";
import Dock from "@/store/ui/Dock";
import app from "@/store/app";

export const store = {
  ui: {
    NavBar,
    Main: {
      Weapons,
      Gears,
    },
    Dock,
  },
  app,
};
