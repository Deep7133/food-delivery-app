import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../Components/Cartcontext";

const restaurantMenus = {
  "Saffron": [
    { id: 1, name: "Butter Chicken", price: 319, originalPrice: 350 },
    { id: 2, name: "Paneer Makhani", price: 289, originalPrice: 320 },
    { id: 3, name: "Dal Makhani", price: 249, originalPrice: 270 },
    { id: 4, name: "Veg Biryani", price: 299, originalPrice: 330 },
  ],
  "Desi Delights": [
    { id: 1, name: "Aloo Paratha", price: 149, originalPrice: 180 },
    { id: 2, name: "Puri Cholay", price: 139, originalPrice: 160 },
    { id: 3, name: "Vegetable Katiroll", price: 170, originalPrice: 190 },
    { id: 4, name: "Vegetable Sandwich", price: 180, originalPrice: 210 },
  ],
};
const DishCard = ({ dish, restaurantName, addToCart, dishQuantity, setDishQuantity }) => {
  const incrementQuantity = () => {
    setDishQuantity(dish.id, dishQuantity + 1);
    addToCart(dish, restaurantName, dishQuantity + 1);
  };

  
  const decrementQuantity = () => {
    if (dishQuantity > 0) {
      setDishQuantity(dish.id, dishQuantity - 1);
      addToCart(dish, restaurantName, dishQuantity - 1);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center transform transition-transform hover:scale-105 duration-300 ease-in-out">
      <h2 className="text-lg font-semibold text-gray-800">{dish.name}</h2>
      <div className="mt-2">
        <span className="text-xl font-bold text-black">₹{dish.price}</span>
        <span className="line-through text-gray-500 ml-2 text-sm">₹{dish.originalPrice}</span>
      </div>

      <div className="flex items-center justify-center mt-4">
        <button
          onClick={decrementQuantity}
          className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300 transition-all transform hover:scale-110 duration-200"
        >
          -
        </button>
        <span className="px-4 py-1 border">{dishQuantity}</span>
        <button
          onClick={incrementQuantity}
          className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300 transition-all transform hover:scale-110 duration-200"
        >
          +
        </button>
      </div>
    </div>
  );
};

const Dishes = () => {
  const { updateCartCount } = useCart();  
  const location = useLocation();
  const { restaurantName } = location.state || {};
  const menu = restaurantMenus[restaurantName] || [];

  const [cart, setCart] = useState([]);
  const [dishQuantities, setDishQuantities] = useState({});
  const [buttonClicked, setButtonClicked] = useState(false); 

  const navigate = useNavigate();

  const addToCart = (dish, restaurantName) => {
    const newQuantity = (dishQuantities[dish.id] || 0) + 1;
    setDishQuantities({ ...dishQuantities, [dish.id]: newQuantity });

    const itemInCart = cart.find(item => item.id === dish.id && item.restaurantName === restaurantName);

    if (itemInCart) {
      const updatedCart = cart.map(item =>
        item.id === dish.id && item.restaurantName === restaurantName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { ...dish, restaurantName, quantity: 1 }]);
    }

    // Update total count correctly
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0) + 1;
    updateCartCount(totalItems);
  };

  const removeFromCart = (dish, restaurantName) => {
    const currentQuantity = dishQuantities[dish.id] || 0;
    if (currentQuantity > 0) {
      const newQuantity = currentQuantity - 1;
      setDishQuantities({ ...dishQuantities, [dish.id]: newQuantity });

      const updatedCart = cart
        .map(item => 
          item.id === dish.id && item.restaurantName === restaurantName 
            ? { ...item, quantity: newQuantity } 
            : item
        )
        .filter(item => item.quantity > 0); // Remove items with 0 quantity

      setCart(updatedCart);

      // Update total count correctly
      const totalItems = updatedCart.reduce((total, item) => total + item.quantity, 0);
      updateCartCount(totalItems);
    }
  };

  const handleGoToCartClick = () => {
    setButtonClicked(true);
    setTimeout(() => {
      // ✅ Navigate with cartItems as state
      navigate("/cart", { state: { cartItems: cart } });
    }, 300);
  };
  

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {restaurantName} - Menu
      </h1>

      <div className="flex flex-wrap gap-6 justify-center p-6">
        {menu.length > 0 ? (
          menu.map((dish) => {
            const dishQuantity = dishQuantities[dish.id] || 0;
            return (
              <div key={dish.id} className="bg-white shadow-md rounded-lg p-4 w-64">
                <h2 className="text-lg font-semibold">{dish.name}</h2>
                <p className="text-gray-600">₹{dish.price}</p>
                <div className="flex justify-between items-center mt-3">
                  <button 
                    onClick={() => removeFromCart(dish, restaurantName)} 
                    className="px-3 py-1 bg-gray-300 rounded"
                  > - </button>
                  <span className="text-lg">{dishQuantity}</span>
                  <button 
                    onClick={() => addToCart(dish, restaurantName)} 
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  > + </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No dishes available for this restaurant.</p>
        )}
      </div>

      <button
        onClick={handleGoToCartClick}
        className={`mt-6 w-full py-2 rounded-lg text-white transition ${
          buttonClicked ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {buttonClicked ? "Redirecting..." : "Go To Cart"}
      </button>
    </div>
  );
};

export default Dishes;