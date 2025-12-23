import Home from "../pages/Home";
import Notes from "../pages/Notes";


export const routes: Record<string, () => HTMLElement> = {
  "/": Home,
  "/notes": Notes,
};
