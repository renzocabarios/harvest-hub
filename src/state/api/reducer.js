import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../env/index.js";
// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["User", "Admin"],
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
} = api;
