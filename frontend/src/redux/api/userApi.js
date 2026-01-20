import { USER_URL } from "../constant";
import { apiSlice } from "./apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: `${USER_URL}/register`,
        method: `POST`,
        body: userData,
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({ email, otp }) => ({
        url: `${USER_URL}/verify-otp`,
        method: "POST",
        body: { email, otp },
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useVerifyOtpMutation } = userApi;
