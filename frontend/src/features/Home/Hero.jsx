import React, { useState } from "react";
import HeroImg from "../../assets/heroimg.png";
import Layout from "../../shared/Layout";

const Hero = () => {
  const [selected, setSelected] = useState("buy");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleButtonClick = (type) => {
    setSelected(type);
  };
  return (
    <Layout>
      <div className="flex flex-col md:flex-row itmes-center justify-between px-6 py-10">
        {/* left section */}
        <div className="flex-1 md:basis-[40%] lg:basis-[35%]">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl text-sky-800 font-bold leading-10 xl:leading-14">
            Your New <br />
            <span className="text-orange-500">Home Awaits</span>
          </h1>
          <h4 className="text-xl lg:text-2xl font-semibold text-sky-800 mt-4">
            Buy, Rent, and Move In Today
          </h4>
          <p className="text-lg text-sky-800 py-6">
            Whether you're searching for a place to call your own or a rental
            that feels like home, we've got you covered
          </p>
          {/* buttons */}
          <div className="flex-1 space-x-4">
            <button
              onClick={() => handleButtonClick("buy")}
              className={`py-2 px-6 rounded-l-xl transition-all duration-300 cursor-pointer ${
                selected === "buy"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-sky-800 border border-orange-500"
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => handleButtonClick("rent")}
              className={`py-2 px-6 rounded-r-xl transition-all duration-300 cursor-pointer ${
                selected === "rent"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-sky-800 border border-orange-500"
              }`}
            >
              Rent
            </button>
          </div>
          {/* form */}
          <div className="mt-6 p-6 bg-orange-500 rounded-xl shadow-lg md:w-125 w-full">
            <form className="flex flex-col md:flex-row items-center md:items-end gap-4 w-full">
              {/* location */}
              <div className="flex-1 w-full">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter Location"
                  className="w-full p-3 bg-white text-sky-800 rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              {/* Min price */}
              <div className="flex-1 w-full">
                <label
                  htmlFor="MinPrice"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Min Price
                </label>
                <input
                  type="text"
                  id="MinPrice"
                  value={minPrice}
                  placeholder="Min Price"
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full p-3 bg-white text-sky-800 rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              {/* Max price */}
              <div className="flex-1 w-full">
                <label
                  htmlFor="maxPrice"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Max Price
                </label>
                <input
                  type="text"
                  id="maxPrice"
                  value={maxPrice}
                  placeholder="Max price"
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full p-3 bg-white text-sky-800 rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="flex-none">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-white text-orange-500 font-bold rounded-lg shadow-md hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Right section image */}
        <div className="flex-2 md:basis-[60%] lg:basis-[65%]">
          <img
            src={HeroImg}
            alt="heroimg"
            className="w-full h-auto object-cover max-w-full"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
