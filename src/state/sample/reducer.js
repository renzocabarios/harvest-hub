import { createSlice } from "@reduxjs/toolkit";
import { RESOURCES } from "../../constants";
import { initialState } from "./state";

export const sampleSlice = createSlice({
  name: RESOURCES.SAMPLE,
  initialState,
  reducers: {},
});

export const {} = sampleSlice.actions;

export default sampleSlice.reducer;
