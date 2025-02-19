import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import saffron from '../images/saffron.jpg';
import Desi_Delight from '../images/Desi-Delight.jpg';
import pavbhaji from '../images/pavbhaji.png';
import rest from '../images/rest.png';
import sankalp from '../images/sankalp.jpg';
import dosa from '../images/dosa.png';
import miltons from '../images/miltons.png';
import pind_di_gali from '../images/pind_di_gali.png';
import flavours from '../images/flavours.png';

const Restaurants = () => {
  const [search, setSearch] = useState('');
  const [restaurantRatings, setRestaurantRatings] = useState({}); // Store ratings for each restaurant
  const [userRatings, setUserRatings] = useState({}); // Store individual user ratings
  const navigate = useNavigate();

  const restaurants = [
    { name: 'Saffron', image: saffron, rating: 4.5, cuisine: 'Multi-Cuisine', location: 'Alkapuri, Baroda, Gujarat' },
    { name: 'Desi Delights', image: Desi_Delight, rating: 4.7, cuisine: 'Punjabi', location: 'Sayajigunj, Baroda, Gujarat' },
    { name: "Kaka Ni Pav Bhaji", image: pavbhaji, rating: 4.5, cuisine: "Street Food, Pav-bhaji, Biryani", location: "Amit Nagar Circle, Karelibaug, Vadodara, Gujarat" },
    { name: 'Flavors of India', image: flavours, rating: 4.8, cuisine: 'North Indian', location: 'Race Course Road, Baroda, Gujarat' },
    { name: "Sankalp", image: sankalp, rating: 4.0, cuisine: "South Indian", location: "Fatehganj, Baroda, Gujarat" },
    { name: "Sree Kumar South Indian Restaurant", image: dosa, rating: 4.4, cuisine: "South Indian", location: "Ajwa Road, Baroda, Gujarat" },
    { name: "Milton's South Corner", image: miltons, rating: 4.2, cuisine: "South Indian", location: "Alkapuri, Baroda, Gujarat" },
    { name: "Pind Di Gali", image: pind_di_gali, rating: 4.5, cuisine: "Punjabi", location: "Sayajigunj, Baroda, Gujarat" },
    { name: "Azure", image: rest, rating: 4.6, cuisine: "Multi-Cuisine", location: "Alkapuri, Baroda, Gujarat" },
  ];

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate the total rating of the restaurant as an average
  const calculateTotalRating = (restaurantName) => {
    const ratings = Object.values(userRatings).filter(rating => rating.restaurantName === restaurantName);
    if (ratings.length === 0) return 0; // No ratings
    const total = ratings.reduce((acc, curr) => acc + curr.rating, 0);
    return (total / ratings.length).toFixed(1); // Return average rating
  };

  // Handle rating change
  const handleRatingChange = (restaurantName, rating) => {
    // If the user clicks on the same star again, we clear the rating (remove the rating)
    if (userRatings[restaurantName] && userRatings[restaurantName].rating === rating) {
      const newRatings = { ...userRatings };
      delete newRatings[restaurantName]; // Remove the rating
      setUserRatings(newRatings);
    } else {
      setUserRatings((prevRatings) => ({
        ...prevRatings,
        [restaurantName]: { rating, restaurantName }, // Store the new rating
      }));
    }
  };

 // In Restaurants component
const handleOrderNow = (restaurant) => {
  navigate('/dishes', { state: { restaurantName: restaurant.name } }); // Pass the name of the restaurant
};

  // Render stars based on the rating
  const renderStars = (restaurantName) => {
    const currentRating = userRatings[restaurantName]?.rating || 0; // Default rating is 0 if not set
    return [...Array(5)].map((_, index) => {
      const starIndex = index + 1;
      return (
        <FaStar
          key={starIndex}
          className={`cursor-pointer transition-all duration-300 ${starIndex <= currentRating ? 'text-yellow-500' : 'text-gray-300'}`}
          onClick={() => handleRatingChange(restaurantName, starIndex)} // Set or remove rating when star is clicked
          onMouseEnter={(e) => e.target.classList.add('text-yellow-400')}
          onMouseLeave={(e) => e.target.classList.remove('text-yellow-400')}
        />
      );
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Restaurants</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-gray-300 rounded-lg py-2 px-4 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Restaurants List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image Wrapper */}
              <div className="w-full h-56">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Restaurant Details */}
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">{restaurant.name}</h2>
                <div className="flex items-center space-x-2 mt-2">
                  {/* Display total rating */}
                  <span className="text-yellow-500">Total Rating: {calculateTotalRating(restaurant.name)} ⭐</span>
                </div>
                <p className="text-gray-500 mt-2">{restaurant.location}</p>

                {/* Rating stars for user to rate */}
                <div className="flex space-x-1 mt-4">
                  {renderStars(restaurant.name)}
                </div>
              </div>

              {/* Order Now Button */}
              <div className="flex justify-between items-center p-4">
                {/* Order Now Button */}
                <button
                  onClick={() => handleOrderNow(restaurant)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3">No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
