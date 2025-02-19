import React from 'react';
import missionImage from '../images/tiffin.webp'; // Replace with your actual image path

const Mission = () => {
  return (
    <div className="bg-[#D2B48C] py-16 px-4 sm:px-8 lg:px-12 min-h-[50vh] sm:min-h-screen flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Side - Heading and Mission Text */}
      <div className="w-full md:w-1/2 text-left mb-6 md:mb-0">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Our Mission :
        </h2>
        <hr className="my-6 sm:my-8 border-t-4 border-gray-800 w-full" />
        <p className="text-lg sm:text-xl md:text-lg lg:text-2xl text-gray-700 max-w-4xl">
          To make your taste buds dance with joy! We partner with the best local eateries to bring you mouthwatering meals.
        </p>
      </div>
      
      {/* Right Side - Mission Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={missionImage} alt="Mission" className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Mission;