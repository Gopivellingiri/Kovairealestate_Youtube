import React from "react";
import { Link } from "react-router-dom";

const ListingFilters = ({ filters, onChange, onReset }) => {
  /* -------------------------- //PROPERTY FILTERING -------------------------- */
  const propertyTypes = [
    "All",
    "House",
    "Agriculture",
    "Residential Plot",
    "Commercial",
  ];

  return (
    <div className="sectionContainer">
      <div className="flex flex-col md:items-center flex-wrap md:flex-row md:flex-nowrap md:space-x-2 items-start space-y-5 md:space-y-0 lg:space-x-5 lg:space-y-0 xl:space-y-0 w-full">
        {/* property Type dropdown */}

        <select
          value={filters.propertyType}
          onChange={(e) => onChange({ propertyType: e.target.value })}
          className="border rounded-full px-6 py-3"
        >
          <option value="">Property Type</option>
          {propertyTypes.map((type) => (
            <option key={type} value={type === "All" ? "" : type}>
              {type}
            </option>
          ))}
        </select>

        {/* min price input */}
        <div className="w-full md:w-max">
          <input
            type="number"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={(e) => onChange({ minPrice: e.target.value })}
            className="border bg-transparent border-sky-800 py-3 px-6 rounded-full mt-5 md:m-0 lg:m-0 xl-0 w-full"
          />
        </div>
        {/* max price input */}
        <div className="w-full md:w-max">
          <input
            type="number"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) => onChange({ maxPrice: e.target.value })}
            className="border bg-transparent border-sky-800 py-3 px-6 rounded-full mt-5 md:m-0 lg:m-0 xl-0 w-full"
          />
        </div>

        {/* Bedroom input */}
        <div className="w-full md:w-max">
          <input
            type="number"
            placeholder="Bedrooms"
            value={filters.bedrooms}
            onChange={(e) => onChange({ bedrooms: e.target.value })}
            className="border bg-transparent border-sky-800 py-3 px-6 rounded-full mt-5 md:m-0 lg:m-0 xl-0 w-full"
          />
        </div>
        {/* search button */}
        <button
          onClick={onReset}
          className="py-3 px-6 bg-orange-500 hover:bg-orange-600 duration-300 transition-colors text-white rounded-full mt-5 md:m-0 lg:m-0 xl-0 w-full md:w-max cursor-pointer"
        >
          {" "}
          Reset
        </button>
        <Link to="/profile/add-listing">
          <span className="secondary ml-2 py-3 text-nowrap">
            Submit Property
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ListingFilters;
