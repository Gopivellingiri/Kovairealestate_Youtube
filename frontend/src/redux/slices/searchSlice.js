import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  minPrice: "",
  maxPrice: "",
  propertyType: "",
  type: "buy",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchFilters: (state, action) => {
      Object.assign(state, action.payload);
    },
    resetFilters: () => initialState,
  },
});

export const { setSearchFilters, resetFilters } = searchSlice.actions;
export default searchSlice.reducer;
