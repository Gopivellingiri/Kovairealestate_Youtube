import { apiSlice } from "../api/apiSlice";
import { PROPERTY_URL } from "../constant";

export const propertyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: ({
        page = 1,
        limit = 6,
        propertyType,
        minPrice,
        maxPrice,
        bedrooms,
        searchCity,
      }) => {
        const params = new URLSearchParams({ page, limit });
        if (propertyType) params.append("type", propertyType);
        if (maxPrice) params.append("maxPrice", maxPrice);
        if (minPrice) params.append("minPrice", minPrice);
        if (bedrooms) params.append("bedrooms", bedrooms);
        if (searchCity) params.append("city", searchCity);

        return {
          url: `${PROPERTY_URL}/get-propertyCards?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["property"],
    }),
  }),
});

export const { useGetAllPropertiesQuery } = propertyApi;
