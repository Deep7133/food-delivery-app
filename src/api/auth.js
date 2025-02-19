const API_URL = "http://localhost:5000/api"; // Change this if needed

// Signup API
export const signupUser = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    return await response.json();
  } catch (error) {
    console.error("Signup Error:", error);
    return { error: "Something went wrong during signup!" };
  }
};

// Login API
export const loginUser = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    return await response.json();
  } catch (error) {
    console.error("Login Error:", error);
    return { error: "Something went wrong during login!" };
  }
};
