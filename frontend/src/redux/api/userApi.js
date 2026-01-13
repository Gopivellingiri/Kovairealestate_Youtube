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
  }),
});

export const { useRegisterUserMutation } = userApi;
