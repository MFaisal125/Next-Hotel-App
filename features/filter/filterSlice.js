import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  countries: [],
  priceRange: { min: 5, max: 500 },
  dateRange: { startDate: null, endDate: null },
  // ratings: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setCountries: (state, action) => {
      state.countries = action.payload;
    },

    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },

    setDateRange: (state, action) => {
      state.dateRange = action.payload;
    },

    // setRatings: (state, action) => {
    //   state.ratings = action.payload;
    // },

    // resetFilter: (state) => {
    //   state.category = [];
    //   state.countries = [];
    //   state.priceRange = { min: 5, max: 500 };
    //   state.dateRange = { startDate: null, endDate: null };
    //   // state.ratings = [];
    // },
  },
});

export const {
  setCategory,
  setCountries,
  setPriceRange,
  setDateRange,
  // setRatings,
  // resetFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
