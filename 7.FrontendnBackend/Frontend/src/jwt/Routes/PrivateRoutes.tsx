// src/router/PrivateRoutes.tsx
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import ViewContent from "../Pages/ViewContent";

const PrivateLayout = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
};

export const privateRoutes = [
  {
    element: <PrivateLayout />,
    children: [
      {
        path: "/view",
        element: <ViewContent />,
      },
      // You can add more private-only routes here
    ],
  },
];
