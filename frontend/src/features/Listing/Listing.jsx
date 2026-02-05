import { useState } from "react";
import ListingCard from "../Listing/Listingcards/ListingCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GoogleMapPage from "./GoogleMapPage";
import { Link } from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useGetAllPropertiesQuery } from "../../redux/api/propertyApi";

const Listing = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const propertyTypes = [
    "All",
    "House",
    "Agriculture",
    "Residential Plot",
    "Commercial",
  ];

  /* -------------------------- //GET PROPERTY CARDS -------------------------- */
  const { data: allPropertyCard, isLoading } = useGetAllPropertiesQuery();
  const properties = allPropertyCard?.properties;

  console.log("this is the property cards", properties);

  return (
    <div className="mt-10">
      {/* filter section */}
      <div className="sectionContainer">
        <div className="flex flex-col md:items-center flex-wrap md:flex-row md:flex-nowrap md:space-x-2 items-start space-y-5 md:space-y-0 lg:space-x-5 lg:space-y-0 xl:space-y-0 w-full">
          {/* property Type dropdown */}
          <div className="relative rounded cursor-pointer text-sky-800 font-semibold text-base w-full md:w-max">
            <span
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="py-3 px-6 border border-sky-800 rounded-full flex items-center justify-between md:justify-start text-nowrap"
            >
              properties <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            </span>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 bg-white border rounded shadow-lg w-full font-semibold text-base text-sky-800">
                {propertyTypes.map((type) => (
                  <div
                    key={type}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* min price input */}
          <div className="w-full md:w-max">
            <input
              type="number"
              placeholder="Min Price"
              name="minPrice"
              className="border bg-transparent border-sky-800 py-3 px-6 rounded-full mt-5 md:m-0 lg:m-0 xl-0 w-full"
            />
          </div>

          {/* Bedroom input */}
          <div className="w-full md:w-max">
            <input
              type="number"
              placeholder="Bedrooms"
              name="bedrooms"
              className="border bg-transparent border-sky-800 py-3 px-6 rounded-full mt-5 md:m-0 lg:m-0 xl-0 w-full"
            />
          </div>
          {/* search button */}
          <button className="py-3 px-6 bg-orange-500 hover:bg-orange-600 duration-300 transition-colors text-white rounded-full mt-5 md:m-0 lg:m-0 xl-0 w-full md:w-max cursor-pointer">
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

      {/* Listing section */}
      <div className="sectionContainer flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:justify-between gap-4 pt-10 xl:gap-5 mb-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:gap-5 max-h-175 md:overflow-y-auto md:w-1/2">
          {properties?.length > 0 ? (
            properties?.map((property) => (
              <ListingCard key={property?._id} property={property} />
            ))
          ) : (
            <div className="col-span-3 text-center text-lg text-sky-800 font-semibold">
              <span>No properties found based on your search creterial</span>
            </div>
          )}
          <div className="sm:col-span-2 xl:col-span-3 flex justify-center md:mt-4">
            Pagination
          </div>
        </div>
        {/* map section */}
        <div className="block w-full h-125 sm:h-100 md:w-1/2 md:h-175">
          <GoogleMapPage property={properties} />
        </div>
      </div>
    </div>
  );
};

export default Listing;
