import { apiSlice } from "../api/apiSlice";
import { PROPERTY_URL } from "../constant";

export const propertyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => ({
        url: `${PROPERTY_URL}/get-propertyCards`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllPropertiesQuery } = propertyApi;
