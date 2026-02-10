import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = ({ size = 18, color = "#111827" }) => {
  return (
    <Oval
      height={size}
      width={size}
      color={color}
      secondaryColor="#e5e7eb"
      strokeWidth={4}
      visible
    />
  );
};

export default Loader;
