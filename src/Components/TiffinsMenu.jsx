import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tiffinName } = location.state;

  // Define menu items based on tiffinName
  const tiffinMenus = {
    "Healthy Tiffin Service": [
      { name: "4 Rotis", price: "₹20" },
      { name: "2 Sabji", subItems: ["Aloo Gobi", "Paneer Butter Masala"], price: "₹50" },
      { name: "1 Salad", price: "₹20" },
      { name: "1 Papad", price: "₹10" },
    ],
    "Homemade Meals": [
      { name: "2 Rotis", price: "₹25" },
      { name: "1 Curry", subItems: ["Dal Tadka", "Aloo Gobi"], price: "₹40" },
      { name: "Rice", price: "₹30" },
      { name: "Cucumber Salad", price: "₹15" },
    ],
    "Homemade Meals": [
      { name: "2 Rotis", price: "₹25" },
      { name: "1 Curry", subItems: ["Dal Tadka", "Aloo Gobi"], price: "₹40" },
      { name: "Rice", price: "₹30" },
      { name: "Cucumber Salad", price: "₹15" },
    ],
    "Vegan Tiffins": [
      { name: "Vegan Wrap", price: "₹40" },
      { name: "Veg Curry", subItems: ["Chana Masala", "Baingan Bharta"], price: "₹50" },
      { name: "Brown Rice", price: "₹30" },
      { name: "Fresh Fruit Salad", price: "₹20" },
    ],
    "Diet Tiffin": [
      { name: "Quinoa", price: "₹40" },
      { name: "Grilled Chicken", price: "₹80" },
      { name: "Steamed Vegetables", price: "₹30" },
      { name: "Low-fat Yogurt", price: "₹25" },
    ],
  };

  // Get the menu for the selected tiffin
  const menu = tiffinMenus[tiffinName] || [];

  // Calculate total price
  const totalPrice = menu.reduce(
    (total, item) => total + parseInt(item.price.replace("₹", ""), 10),
    0
  );

  // Save to local storage when navigating to cart
  const goToCart = () => {
    const cartData = [{ restaurant: tiffinName, name: "Tiffin Combo", price: totalPrice, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartData));
    navigate("/cart", { state: { cartItems: cartData } });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {tiffinName} Menu
        </h1>

        {/* Menu Items Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menu.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>

              {item.subItems && (
                <ul className="list-disc pl-5 text-gray-700 mb-3">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              )}

              <p className="text-gray-700 font-semibold">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Total Price Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8 flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-800">Total</h3>
          <p className="text-2xl font-semibold text-gray-800">{`₹${totalPrice}`}</p>
        </div>

        {/* Go to Cart Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={goToCart}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
