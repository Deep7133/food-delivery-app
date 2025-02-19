import React, { useState } from 'react';
import { Menu, X, UserCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-4xl text-orange-600 font-extrabold tracking-wide">𝐸𝒶𝓉𝒩𝑜𝓌</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 ml-auto font-medium">
          <Link to="/" className="text-gray-900 hover:text-orange-600 transition">Home</Link>
          <Link to="/restaurants" className="text-gray-900 hover:text-orange-600 transition">Restaurants</Link>
          <Link to="/tiffins" className="text-gray-900 hover:text-orange-600 transition">Tiffins</Link>
          <Link to="/about" className="text-gray-900 hover:text-orange-600 transition">About</Link>
          <Link to="/contact" className="text-gray-900 hover:text-orange-600 transition">Contact</Link>
          
          {user && (
            <div className="relative">
              <button
                onClick={() => setProfileDropdown(!profileDropdown)}
                className="flex items-center space-x-2 text-gray-900 hover:text-orange-600 transition"
              >
                <UserCircle className="h-6 w-6" />
                <ChevronDown className="h-4 w-4" />
              </button>

              {profileDropdown && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg py-2">
                  <Link to="/profile" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Edit Profile</Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
          
          {!user && (
            <Link to="/login" className="text-gray-900 hover:text-orange-600 transition">Login</Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-4" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md p-5 flex flex-col space-y-4 text-center">
          <Link to="/" className="text-gray-900 hover:text-orange-600 transition">Home</Link>
          <Link to="/restaurants" className="text-gray-900 hover:text-orange-600 transition">Restaurants</Link>
          <Link to="/tiffins" className="text-gray-900 hover:text-orange-600 transition">Tiffins</Link>
          <Link to="/about" className="text-gray-900 hover:text-orange-600 transition">About</Link>
          <Link to="/contact" className="text-gray-900 hover:text-orange-600 transition">Contact</Link>
          
          {user ? (
            <div className="flex flex-col space-y-2">
              <Link to="/profile" className="text-gray-900 hover:text-orange-600 transition">Edit Profile</Link>
              <button onClick={logout} className="text-red-500 hover:text-red-700 transition">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="text-gray-900 hover:text-orange-600 transition">Login</Link>
          )}
        </nav>
      )}
    </header>
  );
}
