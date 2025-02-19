import React from "react";
import { ShoppingBag } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTelegram, FaApple, FaGooglePlay } from "react-icons/fa";
import image from "../images/footer.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      {/* Order Tracking Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 sm:p-12 max-w-7xl mx-auto">
        
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 p-4 sm:p-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Track orders to your door</h2>
          <p className="text-gray-400 text-sm sm:text-lg mb-4 sm:mb-6">
            Get your favorite food delivered in a flash. You’ll see when your rider has picked up your order, 
            and be able to follow them along the way. You’ll get a notification when they’re nearby, too.
          </p>
          
          {/* App Store Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 text-xs sm:text-sm border border-gray-300 shadow-md">
              <FaApple className="text-lg" />
              <span>App Store</span>
            </button>
            <button className="bg-white text-black px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 text-xs sm:text-sm border border-gray-300 shadow-md">
              <FaGooglePlay className="text-lg" />
              <span>Google Play</span>
            </button>
          </div>
        </div>

        {/* Right Side - Map Illustration */}
        <div className="md:w-1/2 relative mt-6 md:mt-0 px-4">
          <img src={image} alt="Order Tracking Map" className="w-full rounded-lg" />
          
          {/* Notification Box at the Top-Center */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-2 sm:p-3 w-36 sm:w-48 text-xs">
            <p className="text-blue-600 font-bold">EATNOW</p>
            <p className="text-gray-800 font-semibold">Your rider’s nearby 🎉</p>
            <p className="text-gray-600 hidden sm:block">They’re almost there – get ready!</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Brand Logo & Tagline */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              <span className="text-xl sm:text-2xl font-bold">EatNow</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">Delivering happiness to your doorstep</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>About Us</li>
              <li>Partner with Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>support@EatNow.com</li>
              <li>1-800-EATNOW</li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-400 hover:text-orange-500 text-xl sm:text-2xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-400 hover:text-orange-500 text-xl sm:text-2xl" />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="text-gray-400 hover:text-orange-500 text-xl sm:text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2024 EatNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
