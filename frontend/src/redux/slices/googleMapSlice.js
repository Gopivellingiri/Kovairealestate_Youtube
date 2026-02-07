import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProperty: null,
  isStreetView: false,
};

const googleMapSlice = createSlice({
  name: "googleMap",
  initialState,
  reducers: {
    setSelectedProperty: (state, action) => {
      state.selectedProperty = action.payload;
    },
    clearSelectedProperty: (state) => {
      state.selectedProperty = null;
    },
    toggleStreetView: (state, action) => {
      state.isStreetView = action.payload;
    },
  },
});
export const { setSelectedProperty, clearSelectedProperty, toggleStreetView } =
  googleMapSlice.actions;
export default googleMapSlice.reducer;
