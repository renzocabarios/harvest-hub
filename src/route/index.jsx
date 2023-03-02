import { useRoutes, Navigate } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  Admin,
  AdminUser,
  AdminCustomer,
  AdminFarmer,
  AdminCreateUser,
} from "@/page";

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Admin />,
    },
    {
      path: "/dashboard/users",
      element: <AdminUser />,
    },
    {
      path: "/dashboard/customers",
      element: <AdminCustomer />,
    },
    {
      path: "/dashboard/farmers",
      element: <AdminFarmer />,
    },
    {
      path: "/dashboard/users/create",
      element: <AdminCreateUser />,
    },
  ]);
}
