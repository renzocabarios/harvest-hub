import { configureStore } from "@reduxjs/toolkit";
import sample from "./sample/reducer";
import { api } from "./api/reducer";

export const store = configureStore({
  reducer: {
    sample,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
