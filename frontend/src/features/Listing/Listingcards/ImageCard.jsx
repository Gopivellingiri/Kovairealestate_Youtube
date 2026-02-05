import { Link } from "react-router-dom";
import NoImage from "./NoImage.jsx";

const ImageCard = ({ property }) => {
  const thumbnail = property?.thumbnail;
  return (
    <Link to={`/listing/${property?._id}`}>
      {thumbnail ? (
        thumbnail?.type?.startsWith("image") ? (
          <img
            className="w-full h-full object-cover"
            src={thumbnail?.url}
            alt={property?.propertyTitle}
          />
        ) : (
          <video
            className="w-full h-full object-cover"
            controls
            src={thumbnail?.url}
          />
        )
      ) : (
        <div className="flex items-center justify-center max-h-75">
          <NoImage />
        </div>
      )}
    </Link>
  );
};

export default ImageCard;
