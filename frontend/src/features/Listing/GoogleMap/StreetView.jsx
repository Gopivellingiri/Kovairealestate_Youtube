import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleStreetView } from "../../../redux/slices/googleMapSlice";
import { Zoom } from "react-toastify";

const StreetView = ({ lat, lng }) => {
  const dispatch = useDispatch();
  const panoRef = useRef(null);

  useEffect(() => {
    if (!window.google || !lat || !lng) return;
    const panorama = new window.google.maps.StreetViewPanorama(
      panoRef.current,
      {
        position: { lat, lng },
        pov: { heading: 235, pitch: 10 },
        Zoom: 1,
      },
    );
    dispatch(toggleStreetView(true));

    return () => {
      dispatch(toggleStreetView(false));
    };
  }, [lat, lng, dispatch]);
  return (
    <div
      ref={panoRef}
      style={{ width: "100%", height: "100%", borderRadius: "10px" }}
    />
  );
};

export default StreetView;
