import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/BG.jpg";

const OfferPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center text-black text-center relative px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        backgroundAttachment: "fixed" 
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Up to 20% off meal deals</h1>
      <p className="text-md sm:text-lg md:text-xl mt-4 max-w-2xl font-bold">
        Need a midweek pick-me-up, a break from cooking for the family or just
        fancy your favourite restaurant?
      </p>
      <p className="text-xs sm:text-sm md:text-base mt-2 opacity-80 font-bold">
        Subject to availability. Participating restaurants only. Service/delivery fees apply.{' '}
        <a href="#" className="underline">T&amp;Cs</a>
      </p>
      
      <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button 
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 w-full sm:w-auto"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
        <button 
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 w-full sm:w-auto"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default OfferPage;
