import React from "react";
import logo from "../assets/main-logo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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

        {/* navigation */}
        <div className="hidden md:flex md:items-center md:justify-end md:space-x-4 text-sky-800 ">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-orange-500" : "text-gray-700"
            }
          >
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-orange-500" : "text-gray-700"
            }
          >
            <span>About Us</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-orange-500" : "text-gray-700"
            }
          >
            <span>Contact</span>
          </NavLink>

          <NavLink
            to="/agent"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-orange-500" : "text-gray-700"
            }
          >
            <span>Agents</span>
          </NavLink>

          <NavLink
            to="/listing"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-orange-500" : "text-gray-700"
            }
          >
            <span>Go to Listing</span>
          </NavLink>
        </div>

        {/* login button */}
        <div className="hidden md:flex text-nowrap">
          <div className="flex flex-row space-x-4 items-center">
            <Link to="/login" className="primary">
              Sign In
            </Link>
            <Link to="/register" className="secondary">
              Sign Up
            </Link>
          </div>
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
