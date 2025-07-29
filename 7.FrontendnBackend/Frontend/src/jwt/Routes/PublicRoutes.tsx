// src/router/PublicRoutes.tsx
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import Login from "../Pages/Login";

const PublicLayout = () => {
  return !isLoggedIn() ? <Outlet /> : <Navigate to="/" />;
};

export const publicRoutes = [
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      // You can add more public-only routes here
    ],
  },
];
