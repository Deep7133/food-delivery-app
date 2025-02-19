import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import image1 from "../images/person1.png";
import image2 from "../images/person2.png";
import image3 from "../images/person3.png";

const reviews = [
  {
    name: "Rahul Sharma",
    city: "Vadodara",
    rating: 5,
    review: "Best delivery experience! The food arrived on time and was still hot.",
    image: image2,
  },
  {
    name: "Sneha Patel",
    city: "Ahmedabad",
    rating: 4.5,
    review: "Tasty food, arrived hot! Definitely ordering again.",
    image: image1,
  },
  {
    name: "Amit Verma",
    city: "Surat",
    rating: 4,
    review: "Good quality food, but delivery took a bit longer than expected.",
    image: image3,
  }
];

const CustomerReviews = () => {
  const sliderRef = useRef(null); // Slider reference

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">What Our Customers Say</h1>

      <div className="relative w-full max-w-3xl">
        <Slider ref={sliderRef} {...settings} className="w-full">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 flex items-center gap-6 transition-transform duration-300 hover:scale-105"
            >
              {/* Profile Image (Left Side) */}
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-orange-500 shadow-md"
              />
              <div className="text-left flex-1">
                <p className="text-lg italic text-gray-700 mb-3 mt-3">"{review.review}"</p>

                <div className="flex items-center gap-1 text-orange-500">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
                  {review.rating % 1 !== 0 && <FaStar size={18} className="opacity-60" />}
                  <span className="text-lg font-semibold text-gray-800 ml-2">{review.rating} Stars</span>
                </div>
              {/* Review Content (Right Side) */}

                {/* Name & Location */}
                <p className="text-lg font-semibold text-gray-900">{review.name}</p>
                <p className="text-md text-gray-600">{review.city}</p>

                {/* Rating */}
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Arrows */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition"
            onClick={() => sliderRef.current.slickPrev()} 
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition"
            onClick={() => sliderRef.current.slickNext()} 
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
