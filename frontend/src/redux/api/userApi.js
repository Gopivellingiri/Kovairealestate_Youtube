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
    resendOtp: builder.mutation({
      query: ({ email }) => ({
        url: `${USER_URL}/resend-otp`,
        method: "POST",
        body: { email },
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    googleLogin: builder.mutation({
      query: ({ token }) => ({
        url: `${USER_URL}/google-login`,
        method: "POST",
        body: { token },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useLoginUserMutation,
  useGoogleLoginMutation,
} = userApi;
