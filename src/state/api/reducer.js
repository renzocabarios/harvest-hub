import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../env/index.js";
// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: [
    "User",
    "Admin",
    "Customer",
    "Farmer",
    "Product",
    "Cart",
    "Transaction",
  ],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `user`,
      providesTags: ["User"],
    }),
    getUserByType: builder.query({
      query: (type) => `user?find={"type":"${type}"}`,
    }),
    addUser: builder.mutation({
      query: (payload) => ({
        url: "/user",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Admin", "User"],
    }),
    getAdmins: builder.query({
      query: () => `admin`,
    }),
    deleteAdmins: builder.mutation({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Admin", "User"],
    }),
    getCustomers: builder.query({
      query: () => `customer`,
      providesTags: ["Customer"],
    }),
    getFarmers: builder.query({
      query: () => `farmer`,
      providesTags: ["Farmer"],
    }),
    getProducts: builder.query({
      query: () => `product`,
      providesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: (id) => `product/${id}`,
    }),
    getCarts: builder.query({
      query: () => `cart`,
      providesTags: ["Cart"],
    }),
    getTransactions: builder.query({
      query: () => `transaction`,
      providesTags: ["Transaction"],
    }),
    addProduct: builder.mutation({
      query: (payload) => ({
        url: "/product",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Admin", "Farmer", "User"],
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Admin", "Farmer", "User"],
    }),
    addCartLine: builder.mutation({
      query: (payload) => ({
        url: "/cart-line",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserByTypeQuery,
  useGetUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useGetAdminsQuery,
  useDeleteAdminsMutation,
  useGetCustomersQuery,
  useGetFarmersQuery,
  useGetProductsQuery,
  useGetCartsQuery,
  useGetTransactionsQuery,
  useDeleteProductsMutation,
  useAddProductMutation,
  useAddCartLineMutation,
  useGetProductByIdQuery,
} = api;
