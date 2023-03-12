import { createSlice } from "@reduxjs/toolkit";
import { RESOURCES } from "../../constants";
import { initialState } from "./state";
import { api } from "../api/reducer";

export const sampleSlice = createSlice({
  name: RESOURCES.AUTH,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.authenticateUser.matchFulfilled,
      (state, { payload }) => {
        if (payload.status == "success") {
          state.token = payload.meta.token;
          state.user = payload.data[0];
        }
      }
    );
  },
});

export const {} = sampleSlice.actions;

export default sampleSlice.reducer;
