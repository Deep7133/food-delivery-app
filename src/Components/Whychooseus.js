import React from "react";
import { FaBowlRice, FaStar,  } from "react-icons/fa6";
import { FaShippingFast, FaShieldAlt, FaMobileAlt, FaGift } from "react-icons/fa"; // Fixed Import

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaBowlRice,
      title: "Homely Tiffin Services",
      description: "Get fresh, homemade meals daily, made with love and hygiene in mind.",
    },
    {
      icon: FaShippingFast,
      title: "Superfast Delivery",
      description: "Lightning-fast delivery ensures your food reaches you fresh and on time, always.",
    },
    {
      icon: FaStar,
      title: "Top-Rated Restaurants",
      description: "We collaborate with the best restaurants to bring you delicious, high-quality meals.",
    },
    {
      icon: FaShieldAlt,
      title: "Hygiene & Safety First",
      description: "Every meal undergoes strict quality checks to ensure safety and hygiene.",
    },
    {
      icon: FaMobileAlt,
      title: "Seamless Ordering Experience",
      description: "Order tiffins or restaurant meals effortlessly with real-time tracking and secure payments.",
    },
    {
      icon: FaGift,
      title: "Exclusive Offers & Rewards",
      description: "Enjoy discounts, cashback, and membership perks for a more rewarding experience.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-6 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose EatNow?</h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Whether you crave **home-style tiffins** or **restaurant favorites**, we've got you covered with top-quality meals and seamless delivery.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <feature.icon className="text-orange-500 text-4xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
