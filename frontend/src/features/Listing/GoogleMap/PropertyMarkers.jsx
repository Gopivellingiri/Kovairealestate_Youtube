import { InfoWindow, Marker } from "@react-google-maps/api";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSelectedProperty,
  setSelectedProperty,
} from "../../../redux/slices/googleMapSlice";
import ListingCard from "../Listingcards/ListingCard";

const PropertyMarkers = ({ properties }) => {
  const dispatch = useDispatch();
  const { selectedProperty } = useSelector((state) => state.googleMap);
  return (
    <div>
      {properties?.map((property) => (
        <Marker
          key={property?._id}
          position={{
            lat: property.location.coordinates[1],
            lng: property.location.coordinates[0],
          }}
          onClick={() => {
            dispatch(setSelectedProperty(property));
          }}
        ></Marker>
      ))}
      {selectedProperty && (
        <InfoWindow
          position={{
            lat: selectedProperty.location.coordinates[1],
            lng: selectedProperty.location.coordinates[0],
          }}
          onCloseClick={() => dispatch(clearSelectedProperty())}
        >
          <div className="max-w-70">
            <ListingCard property={selectedProperty} />
          </div>
        </InfoWindow>
      )}
    </div>
  );
};

export default PropertyMarkers;
