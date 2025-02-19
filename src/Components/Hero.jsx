// src/Components/HeroSection.js

import React from "react";
import { Link } from "react-router-dom";
import image from "../images/p1.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${image})`, backgroundAttachment: "fixed" }}
      >
        {/* Opacity Layer */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-5 flex flex-col justify-center h-full">
        {/* Centered Heading */}
        <h1 className="text-6xl font-bold tracking-wide text-white">Taste the Magic</h1>

        {/* Order button */}
        <div className="mt-6">
          <Link
            to="/restaurants"
            className="bg-yellow-500 text-black py-3 px-8 rounded-full text-2xl font-semibold shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
