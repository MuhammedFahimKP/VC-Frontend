import { createBrowserRouter, type RouteObject } from "react-router-dom";

import Home from "@/pages/Home";
import Login from "@/pages/Login";

const routes: RouteObject[] = [
  {
    path: "",
    Component: Home,
  },
  {
    path: "login/",
    Component: Login,
  },
];

const router = createBrowserRouter(routes);

export { router };
