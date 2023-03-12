import { configureStore } from "@reduxjs/toolkit";
import sample from "./sample/reducer";
import auth from "./auth/reducer";
import { api } from "./api/reducer";

export const store = configureStore({
  reducer: {
    sample,
    auth,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
