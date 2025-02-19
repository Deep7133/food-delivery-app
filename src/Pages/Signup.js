import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate storing user data
    localStorage.setItem("user", JSON.stringify(formData));

    console.log("User Data Stored:", formData);

    alert("Signup Successful!");
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Create an Account
        </h2>

        <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600 transition mb-4">
          <FaGoogle className="text-lg" /> Sign Up with Google
        </button>

        <div className="flex items-center justify-center my-4">
          <div className="border-t w-1/3"></div>
          <span className="px-2 text-gray-500">OR</span>
          <div className="border-t w-1/3"></div>
        </div>

        <form onSubmit={handleFormSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg mb-4" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg mb-4" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg mb-4" />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg mb-4" />

          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg shadow-md hover:bg-orange-600 transition">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-orange-500 font-semibold">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
