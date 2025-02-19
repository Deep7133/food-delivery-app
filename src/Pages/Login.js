import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { loginUser } from "../api/auth"; // Import API function
import { useAuth } from "../context/AuthContext"; // Import AuthContext
import { useNavigate } from "react-router-dom"; // Import for redirection

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const { login } = useAuth(); // Get login function from AuthContext
  const navigate = useNavigate(); // Get navigation function

  // Handle form input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Clear previous errors

    const result = await loginUser(formData); // Call API function

    if (result.error) {
      setError(result.error);
    } else {
      const userData = { name: "John Doe", email: formData.email }; // Mock user data (replace with real API response)
      login(userData); // Save user in AuthContext
      navigate("/"); // Redirect to home page
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Welcome Back!</h2>

        {/* Google Login Button */}
        <button className="w-full flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition mb-4">
          <FaGoogle className="mr-2" /> Continue with Google
        </button>

        <div className="text-center text-gray-500 my-4">OR</div>

        {/* Display error message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Email & Password Login */}
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="Enter your email" 
              required 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="Enter your password" 
              required 
            />
          </div>

          <button type="submit" className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition">
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">Don't have an account? <a href="/signup" className="text-orange-500 font-semibold">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
