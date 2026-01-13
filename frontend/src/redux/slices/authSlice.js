import { createSlice } from "@reduxjs/toolkit";

const readLocalUser = () => {
  localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
};

const initialState = {
  userInfo: readLocalUser(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload || {};
      if (user) {
        state.userInfo = user;
        localStorage.setItem("userInfo", JSON.stringify(user));
      }
      if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        localStorage.setItem("expirationTime", String(payload.exp * 1000));
      }
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("expirationTime");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
