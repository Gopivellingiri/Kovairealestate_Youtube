import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashboardButton = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="flex items-center md:flex-wrap-reverse md:justify-end">
      <div className="md:py-3">
        {userInfo?.role === "admin" ? (
          <div>
            <Link to="/admin/dashboard">
              <span className="bg-orange-500 text-white font-medium text-lg hover:bg-orange-600 px-4 py-2 rounded-full duration-300 transition-all mr-2">
                Dashboard
              </span>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DashboardButton;
