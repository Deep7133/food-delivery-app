import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Extract cartItems from location.state
  const { cartItems } = location.state || {}; 
  const [items, setItems] = useState(cartItems || []); 
  // ✅ Increment quantity
  const incrementQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };

  // ✅ Decrement quantity and remove if 0
  const decrementQuantity = (id) => {
    const updatedItems = items
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setItems(updatedItems);
  };

  // ✅ Remove item entirely
  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Your Cart
      </h1>

      {items.length > 0 ? (
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between space-x-6"
            >
              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-800">{item.restaurant}</h2>
                <p className="text-gray-700">{item.name}</p>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="px-4 py-2 text-xl font-semibold border border-gray-300 rounded-lg">
                  {item.quantity}
                </span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-xl font-semibold text-black">
                  ₹{item.price * item.quantity}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}

      <div className="flex justify-end mt-6 space-x-4">
        <button
          onClick={() => navigate("/checkout")}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
