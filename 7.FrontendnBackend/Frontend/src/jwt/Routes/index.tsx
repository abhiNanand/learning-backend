// src/router/index.tsx
import { createBrowserRouter } from "react-router-dom";
import { SharedRoutes } from "./SharedRoutes";
import { privateRoutes } from "./PrivateRoutes";
import { publicRoutes } from "./PublicRoutes";

const router = createBrowserRouter([
  ...SharedRoutes,
  ...privateRoutes,
  ...publicRoutes,
]);

export default router;
