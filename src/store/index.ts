import ui_NavBar from "@/store/ui/NavBar";
import { useStore as app } from "@/store/app";

export const store = {
  ui: {
    NavBar: ui_NavBar,
  },
  app: {
    useStore: app,
  },
};
