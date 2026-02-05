import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spec = ({ icon: Icon, value }) => {
  if (!value) return null;
  return (
    <div className="flex items-center px-2 text-sky-800 font-semibold">
      {typeof Icon === "function" ? <Icon /> : <FontAwesomeIcon icon={Icon} />}
      <span className="ml-2">{value}</span>
    </div>
  );
};

export default Spec;
