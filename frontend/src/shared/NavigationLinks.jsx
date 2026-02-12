import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLinks = () => {
  return (
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
  );
};

export default NavigationLinks;
