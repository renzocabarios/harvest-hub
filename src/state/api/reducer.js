import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../env/index.js";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: [
    "User",
    "Admin",
    "Customer",
    "Farmer",
    "Product",
    "Cart",
    "Transaction",
    "CartLine",
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
      invalidatesTags: ["Cart"],
    }),
    getCartById: builder.query({
      query: (id) => `cart/${id}`,
      providesTags: ["Cart"],
    }),
    deleteCartLine: builder.mutation({
      query: (id) => ({
        url: `/cart-line/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    checkoutMyCart: builder.mutation({
      query: (payload) => ({
        url: `/transaction/checkout`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Cart"],
    }),
    getTransactionsByCustomer: builder.query({
      query: (id) => `transaction/customer/${id}`,
    }),
    authenticateUser: builder.mutation({
      query: (payload) => ({
        url: `/auth`,
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
  useGetCartByIdQuery,
  useDeleteCartLineMutation,
  useCheckoutMyCartMutation,
  useAuthenticateUserMutation,
  useGetTransactionsByCustomerQuery,
} = api;
