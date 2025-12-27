import React from "react";
import Header from "./shared/Header";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};

export default App;
