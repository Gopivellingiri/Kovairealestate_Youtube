import React from "react";
import Header from "./shared/Header";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoadScript } from "@react-google-maps/api";

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places", "geometry"],
  });

  if (loadError) {
    return <div>Failed to Load Google Maps</div>;
  }
  if (!isLoaded) {
    return (
      <div className="h-screen grid place-content-center">Loading map</div>
    );
  }

  return (
    <BrowserRouter>
      {PublicRoutes}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
