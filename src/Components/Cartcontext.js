import React, { createContext, useState, useContext } from "react";

// Create a context for the cart
const CartContext = createContext();

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);  // Array to hold items in the cart
  const [cartCount, setCartCount] = useState(0);   // Total item count in the cart

  // Function to update the total count of items in the cart
  const updateCartCount = () => {
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalCount);
  };

  // Function to add item to the cart
  const addToCart = (dish, restaurantName, quantity = 1) => {
    const newItem = { ...dish, restaurantName, quantity };
    const itemIndex = cartItems.findIndex(item => item.id === dish.id && item.restaurantName === restaurantName);

    if (itemIndex > -1) {
      // Item already in the cart, update its quantity
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity += quantity;
      setCartItems(updatedItems);
    } else {
      // Item not in the cart, add new item
      setCartItems([...cartItems, newItem]);
    }

    updateCartCount();
  };

  // Function to remove item from the cart
  const removeFromCart = (dish, restaurantName, quantity = 1) => {
    const itemIndex = cartItems.findIndex(item => item.id === dish.id && item.restaurantName === restaurantName);

    if (itemIndex > -1) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity -= quantity;

      // If quantity is 0 or less, remove the item from the cart
      if (updatedItems[itemIndex].quantity <= 0) {
        updatedItems.splice(itemIndex, 1);
      }

      setCartItems(updatedItems);
    }

    updateCartCount();
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      addToCart,
      removeFromCart,
      clearCart,
      updateCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
