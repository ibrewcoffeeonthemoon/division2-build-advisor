import { useStore as ui_NavBar } from "@/store/ui/NavBar";
import { useStore as app } from "@/store/app";

export const store = {
  ui: {
    NavBar: { useStore: ui_NavBar },
  },
  app: {
    useStore: app,
  },
};
