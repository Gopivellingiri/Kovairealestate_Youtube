import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

import ImageCard from "../Listingcards/ImageCard";
import SpecsList from "../Listingcards/SpecsList";

const ListingCard = ({ property }) => {
  const truncateTitle = (title, charLimit) => {
    if (typeof title !== "string") return "";
    if (title.length > charLimit) {
      return title.slice(0, charLimit);
    }
    return title;
  };

  const listingPath = property?._id ? `/listing/${property._id}` : "/listing";

  return (
    <div className="relative bg-white border rounded-lg overflow-hidden border-[#afbfc4] min-h-62.5 md:min-h-80 max-w-87.5">
      <div className="w-full max-h-37.5 overflow-hidden">
        <ImageCard property={property} />
        <div className="absolute top-2 md:left-5 gap-2 flex w-full items-center">
          <FontAwesomeIcon
            className="text-red-500 text-2xl"
            icon={faHeartRegular}
            aria-hidden="true"
          />
        </div>
      </div>
      <Link to={listingPath}>
        <div className="flex flex-col items-start justify-between min-h-37.5">
          <div className="p-2">
            <h3 className="text-lg text-sky-800 font-semibold">
              {truncateTitle(property?.propertyTitle, 38)}
            </h3>
          </div>
          <SpecsList type={property?.propertyType} specs={property?.specs} />
          <div className="py-2">
            <span className="text-xl font-bold p-2 text-orange-500">
              <FontAwesomeIcon icon={faIndianRupeeSign} /> {property?.price}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
