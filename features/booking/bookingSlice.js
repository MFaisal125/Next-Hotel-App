import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const bookingSlice = createSlice({
  name: "bookingInfo",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
