import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import azure  from "../images/azure.png";
import pawbhaji from "../images/pawbhaji.png";
import south from "../images/southindian.png";
import punjabi from "../images/punjabi.png";
import sandwich from "../images/sandwich.png";

const restaurants = [
  { name: "Azure", rating: 4.5, time: "30 mins", image: azure },
  { name: "Kaka ni PavBhaji", rating: 3.9, time: "25 mins", image: pawbhaji },
  { name: "Sree Kumar South Indian Restaurant", rating: 4.2, time: "30 mins", image:south },
  { name: "Baroda Sandwich", rating: 4.3, time: "20 mins", image: sandwich },
  { name: "Pind Di Gali", rating: 3.5, time: "30 mins", image:punjabi }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
};

const PopularRestaurants = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl font-bold mb-6">Discover Signature Dishes from Top Restaurants!</h1>
      <Slider {...settings} className="w-full max-w-2xl">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-xl">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-80 object-cover rounded-lg mb-6"
            />
            <h2 className="text-3xl font-semibold">{restaurant.name}</h2>
            <p className="text-xl">⭐ {restaurant.rating} | 🕒 {restaurant.time}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularRestaurants;
