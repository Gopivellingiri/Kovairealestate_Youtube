import React from "react";
import logo from "../assets/main-logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import AutocompleteSearch from "./AutocompleteSearch";
import NavigationLinks from "./NavigationLinks";
import DashboardButton from "./DashboardButton";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  /* -------------------------------- // HEADER ------------------------------- */
  const { pathname } = useLocation();
  const hideButton = pathname === "/login" || pathname === "/register";
  const searchBar = pathname === "/listing";

  return (
    <div className="sectionContainer">
      <div className="flex items-center md:flex-nowrap md:space-x-4 justify-between py-5 font-semibold">
        <div className={`md:flex md:w-37.5`}>
          <Link to="/home">
            <div className="w-50">
              <img src={logo} alt="main-logo" className="w-full" />
            </div>
          </Link>
        </div>

        {searchBar ? (
          <div className="mr-2">
            <AutocompleteSearch />
          </div>
        ) : (
          <div>
            <NavigationLinks />
          </div>
        )}

        {/* login button */}
        <div className="hidden md:flex text-nowrap">
          <>
            <DashboardButton />
          </>
          {!userInfo ? (
            !hideButton && (
              <div className="flex flex-row space-x-4 items-center">
                <Link to="/login" className="primary">
                  Sign In
                </Link>
                <Link to="/register" className="secondary">
                  Sign Up
                </Link>
              </div>
            )
          ) : (
            <div className="flex flex-row items-center">
              <span className="mr-2 text-lg text-sky-800">
                {userInfo?.name}
              </span>
              <div className="w-12 h-12 overflow-hidden">
                <Link to="/profile">
                  <img
                    src={
                      userInfo?.avatar?.url ||
                      `https://api.dicebar.com/7.x/thumbs/svg?seed=${userInfo?.name}`
                    }
                    alt={userInfo?.name}
                    className="w-full h-full rounded-full object-cover border border-sky-800"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* font awesome */}
        <div className="block md:hidden">
          <FontAwesomeIcon className="text-sky-800 text-xl" icon={faBars} />
        </div>
      </div>
      <hr className="border-[#D0DADD]" />
    </div>
  );
};

export default Header;
