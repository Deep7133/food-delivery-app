import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Tiffins = () => {
  const navigate = useNavigate();

  // Example tiffin services
  const tiffins = [
    {
      name: 'Healthy Tiffin Service',
      image: 'path-to-image-1.jpg',
      rating: 4.5,
      description: 'A healthy mix of home-cooked meals.',
    },
    {
      name: 'Homemade Meals',
      image: 'path-to-image-2.jpg',
      rating: 4.7,
      description: 'Delicious homemade meals for the soul.',
    },
    {
      name: 'Vegan Tiffins',
      image: 'path-to-image-3.jpg',
      rating: 4.8,
      description: 'Plant-based, delicious meals for vegans.',
    },
    {
      name: 'Diet Tiffin',
      image: 'path-to-image-4.jpg',
      rating: 4.2,
      description: 'Low-calorie meals that are perfect for your diet.',
    },
  ];

  // Handle Order Now (Redirect to Menu Page for the specific tiffin)
  const handleOrderNow = (tiffin) => {
    navigate('/menu', { state: { tiffinName: tiffin.name } });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Tiffin Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tiffins.map((tiffin, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-56">
              <img
                src={tiffin.image}
                alt={tiffin.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tiffin Details */}
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold text-gray-800">{tiffin.name}</h2>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-500">
                  <FaStar /> {tiffin.rating}
                </span>
              </div>
              <p className="text-gray-500 mt-2">{tiffin.description}</p>
            </div>

            {/* Order Now Button */}
            <div className="p-4">
              <button
                onClick={() => handleOrderNow(tiffin)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiffins;
