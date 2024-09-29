import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const travelAvailabilitySlice = createSlice({
  name: "travelAvailabilitySlice",
  initialState,
  reducers: {
    addTravelAvailability: (state, { payload }) => {
      Object.assign(state, payload);
    },
  },
});

export const { addTravelAvailability } = travelAvailabilitySlice.actions;
export default travelAvailabilitySlice.reducer;
