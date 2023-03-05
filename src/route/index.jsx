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
  FarmerCreateProduct,
  CustomerCreateComment,
  CustomerCreateCart,
  CustomerCreateCartLine,
  CustomerCreateTransaction,
  CustomerCreateTransactionLine,
  AdminAdmins,
} from "@/page";

export function Router() {
  return useRoutes([
    {
      path: "/dashboard/admins",
      element: <AdminAdmins />,
    },
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
      path: "dashboard/transactions",
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
    {
      path: "/dashboard/products/create",
      element: <FarmerCreateProduct />,
    },
    {
      path: "/dashboard/comments/create",
      element: <CustomerCreateComment />,
    },
    {
      path: "/dashboard/carts/create",
      element: <CustomerCreateCart />,
    },
    {
      path: "/dashboard/cart-line/create",
      element: <CustomerCreateCartLine />,
    },
    {
      path: "/dashboard/transactions/create",
      element: <CustomerCreateTransaction />,
    },
    {
      path: "/dashboard/transaction-line/create",
      element: <CustomerCreateTransactionLine />,
    },
  ]);
}
