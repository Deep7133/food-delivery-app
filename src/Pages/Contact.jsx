import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      {/* Header Section */}
      <section className="text-center py-16 bg-gradient-to-r from-green-500 to-yellow-500 text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-4">
          We’re here to help! If you have any questions or feedback, feel free to get in touch.
        </p>
      </section>

      {/* Contact Info and Map with Message Form Section */}
      <section className="py-16 px-4 flex flex-col lg:flex-row gap-12">
        {/* Left Part: Google Map */}
        <div className="lg:w-1/2 w-full h-96 bg-gray-50 rounded-md shadow-lg">
        <iframe
  title="Google Map Location"
  className="w-full h-full rounded-md"
  style={{ height: "540px" }}
  src="https://www.google.com/maps/embed/v1/place?q=A-7%2C%20Batuji%20Nagar%2C%20Kendranagar%2C%20Vadodara&key=AIzaSyCsRotTr_3pJQZ6OfBAvzFKRY5vnd48lVk"
  frameborder="0"
  allowFullScreen=""
  loading="lazy"
></iframe>
        </div>

        {/* Right Part: Send Us a Message */}
        <div className="lg:w-1/2 w-full bg-white shadow-md p-8 rounded-md">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Send Us a Message</h2>
          {isSubmitted ? (
            <div className="text-center text-green-600 font-semibold">
              <p>Your message has been sent successfully!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-left text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-left text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-left text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4 text-center bg-white shadow-lg mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
        <div className="flex justify-center space-x-12 text-gray-600">
          <div>
            <h3 className="font-bold text-lg">Phone</h3>
            <p>+91-8160502805</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Email</h3>
            <p>deepmenpara9@gmail.com</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Address</h3>
            <p>Vadodara, Gujarat, India</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
