import { useRoutes, Navigate } from "react-router-dom";
import {
  Login,
  Register,
  Admin,
  AdminUser,
  AdminCustomer,
  AdminFarmer,
  AdminCreateUser,
  FarmerProfile,
  FarmerProduct,
  CustomerComment,
  CustomerCart,
  CustomerTransaction,
  CustomerTransactionLine,
  CustomerCartLine,
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
    {
      path: "/farmer",
      element: <FarmerProfile />,
    },
    {
      path: "dashboard/products",
      element: <FarmerProduct />,
    },
    {
      path: "dashboard/comments",
      element: <CustomerComment />,
    },
    {
      path: "dashboard/carts",
      element: <CustomerCart />,
    },
    {
      path: "dashboard/transaction",
      element: <CustomerTransaction />,
    },
    {
      path: "dashboard/transaction-line",
      element: <CustomerTransactionLine />,
    },
    {
      path: "dashboard/cart-line",
      element: <CustomerCartLine />,
    },
  ]);
}
