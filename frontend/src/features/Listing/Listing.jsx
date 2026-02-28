import { useMemo, useState } from "react";

import GoogleMapPage from "./GoogleMap/GoogleMapPage";
import { useGetAllPropertiesQuery } from "../../redux/api/propertyApi";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters, setSearchFilters } from "../../redux/slices/searchSlice";
import Loader from "../../shared/Loader";

import ListingFilters from "./ListingFilters";
import ListingGrid from "./ListingGrid.jsx";

const buildQueryParams = (filters) => {
  const params = {};
  if (filters.propertyType) params.propertyType = filters.propertyType;
  if (filters.minPrice) params.minPrice = filters.minPrice;
  if (filters.maxPrice) params.maxPrice = filters.maxPrice;
  if (filters.bedrooms) params.bedrooms = filters.bedrooms;
  if (filters.location?.trim()) params.searchCity = filters.location;
  return params;
};

const Listing = () => {
  /* -------------------------------- //FILTERS ------------------------------- */
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.search);
  const [page, setPage] = useState(1);
  const limit = 6;

  const queryParams = useMemo(() => buildQueryParams(filters), [filters]);

  /* -------------------------- //GET PROPERTY CARDS -------------------------- */
  const { data: allPropertyCard, isLoading } = useGetAllPropertiesQuery({
    page,
    limit,
    ...queryParams,
  });
  const properties = allPropertyCard?.properties;
  const totalPages = allPropertyCard?.totalPages;

  const handleReset = () => {
    setPage(1);
    dispatch(resetFilters());
  };

  if (isLoading) {
    return (
      <div className="h-[80vh] grid place-content-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="mt-10">
      {/* Filters */}
      <ListingFilters
        filters={filters}
        onChange={(payload) => dispatch(setSearchFilters(payload))}
        onReset={handleReset}
      />

      {/* Listing section */}
      <div className="sectionContainer flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:justify-between gap-4 pt-10 xl:gap-5 mb-5">
        <ListingGrid
          properties={properties}
          page={page}
          totalPages={totalPages}
          onPageChange={(_, value) => setPage(value)}
        />
        {/* map section */}
        <div className="block w-full h-125 sm:h-100 md:w-1/2 md:h-175">
          <GoogleMapPage properties={properties} />
        </div>
      </div>
    </div>
  );
};

export default Listing;
