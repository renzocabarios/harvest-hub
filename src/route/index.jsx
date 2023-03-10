import { useRoutes, Navigate } from "react-router-dom";
import {
  Login,
  UserRegister,
  Admin,
  AdminUser,
  AdminCustomer,
  AdminFarmer,
  AdminCreateUser,
  FarmerProfile,
  AdminProduct,
  CustomerComment,
  AdminCart,
  AdminTransaction,
  CustomerTransactionLine,
  CustomerCartLine,
  FarmerCreateProduct,
  CustomerCreateComment,
  CustomerCreateCart,
  CustomerCreateCartLine,
  CustomerCreateTransaction,
  CustomerCreateTransactionLine,
  AdminAdmins,
  FarmerProduct,
  AdminCreateProduct,
  CustomerHome,
  ProductDetail,
  CustomerMyCart,
  AdminCartDetails,
  CustomerMyTransactions,
} from "@/page";

export function Router() {
  return useRoutes([
    {
      path: "/my-transactions",
      element: <CustomerMyTransactions />,
    },
    {
      path: "/dashboard/carts/:id",
      element: <AdminCartDetails />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
    {
      path: "/home",
      element: <CustomerHome />,
    },
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
      element: <UserRegister />,
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
      element: <AdminProduct />,
    },
    {
      path: "dashboard/comments",
      element: <CustomerComment />,
    },
    {
      path: "dashboard/carts",
      element: <AdminCart />,
    },
    {
      path: "dashboard/transactions",
      element: <AdminTransaction />,
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
      element: <AdminCreateProduct />,
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
    {
      path: "/farmer/products",
      element: <FarmerProduct />,
    },
    {
      path: "/farmer/products/create",
      element: <FarmerCreateProduct />,
    },
    {
      path: "/my-cart",
      element: <CustomerMyCart />,
    },
  ]);
}
