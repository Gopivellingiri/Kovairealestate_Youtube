import { useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import StreetView from "./StreetView";
import PropertyMarkers from "./PropertyMarkers";

const mapContainerStyle = { width: "100%", height: "100%" };

const GoogleMapPage = ({ properties }) => {
  console.log("here is the properties:", properties);
  const mapRef = useRef(null);
  const { selectedProperty, isStreetView } = useSelector(
    (state) => state.googleMap,
  );

  return (
    <div className="h-full w-full rounded-lg overflow-hidden">
      {isStreetView ? (
        <StreetView
          lat={selectedProperty.latitude}
          lng={selectedProperty.longitude}
        />
      ) : (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={{ lat: 10.8566961, lng: 77.345735 }}
          zoom={7}
          onLoad={(map) => (mapRef.current = map)}
        >
          <PropertyMarkers properties={properties} />
        </GoogleMap>
      )}
    </div>
  );
};

export default GoogleMapPage;
