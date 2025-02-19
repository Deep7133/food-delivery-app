import React from "react";
import { FaMapMarkerAlt, FaHamburger, FaConciergeBell } from "react-icons/fa";

const Section2 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 bg-white">
      <h2 className="text-gray-500 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">How to order</h2>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-8 sm:mb-12 text-center">
        It's as easy as this.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 max-w-7xl">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center px-4">
          <FaMapMarkerAlt className="text-orange-500 text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6" />
          <h3 className="text-xl sm:text-2xl font-semibold">Tell us where you are</h3>
          <p className="text-gray-600 text-sm sm:text-lg mt-3 sm:mt-4 max-w-xs sm:max-w-md">
            We'll show you stores and restaurants nearby you can order from.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center px-4">
          <FaHamburger className="text-orange-500 text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6" />
          <h3 className="text-xl sm:text-2xl font-semibold">Find what you want</h3>
          <p className="text-gray-600 text-sm sm:text-lg mt-3 sm:mt-4 max-w-xs sm:max-w-md">
            Search for items or dishes, businesses, or cuisines.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center px-4">
          <FaConciergeBell className="text-orange-500 text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6" />
          <h3 className="text-xl sm:text-2xl font-semibold">Order for delivery or collection</h3>
          <p className="text-gray-600 text-sm sm:text-lg mt-3 sm:mt-4 max-w-xs sm:max-w-md">
            We’ll update you on your order’s progress in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
