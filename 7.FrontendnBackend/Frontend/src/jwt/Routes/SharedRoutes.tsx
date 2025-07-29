import Home from "../Pages/Home";
//import type{ RouteObject } from "react-router-dom";

export const SharedRoutes = [
  {
    path: "/",
    element: <Home />
  },
 ];

 //RouteObject is a TypeScript type that defines the shape (structure) of a route in the routes   array when using the createBrowserRouter, useRoutes, or nested route configs.