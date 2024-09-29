import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addUser } = authSlice.actions;
export default authSlice.reducer;
