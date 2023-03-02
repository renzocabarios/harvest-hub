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
      query: (type) => `users?find={"type":"${type}"}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserByTypeQuery, useGetUsersQuery } = api;
