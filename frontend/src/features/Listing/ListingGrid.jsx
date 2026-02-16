import ListingCard from "./Listingcards/ListingCard";
import Pagination from "@mui/material/Pagination";

const ListingGrid = ({ properties, page, totalPages, onPageChange }) => {
  return (
    <div className="md:w-1/2 h-125 md:h-175 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {properties.length ? (
          properties.map((property) => (
            <ListingCard key={property._id} property={property} />
          ))
        ) : (
          <div className="col-span-full text-center font-semibold">
            No Properties found.
          </div>
        )}
      </div>
      <div className="flex justify-center my-5">
        <Pagination
          count={totalPages}
          page={page}
          onChange={onPageChange}
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default ListingGrid;
