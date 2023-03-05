import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../env/index.js";
// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `user`,
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
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
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
} = api;
