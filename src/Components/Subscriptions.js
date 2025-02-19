import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTruck, FaTags, FaHeadset, FaCrown } from "react-icons/fa";

const SubscriptionPlans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic Plan",
      price: 149,
      perks: [
        { icon: <FaTruck />, text: "Lower delivery fees on restaurant & tiffin orders" },
        { icon: <FaTags />, text: "Exclusive discounts up to 10%" },
        { icon: <FaHeadset />, text: "Priority customer support" },
      ],
    },
    {
      name: "Premium Plan",
      price: 299,
      perks: [
        { icon: <FaTruck />, text: "Further reduced delivery fees" },
        { icon: <FaTags />, text: "Exclusive discounts up to 20%" },
        { icon: <FaHeadset />, text: "24/7 priority customer support" },
      ],
    },
    {
      name: "Elite Plan",
      price: 499,
      perks: [
        { icon: <FaTruck />, text: "Unlimited free delivery on all orders" },
        { icon: <FaTags />, text: "Exclusive discounts up to 30%" },
        { icon: <FaCrown />, text: "VIP customer support & early access to deals" },
      ],
    },
  ];

  // Handle subscription and navigate to cart
  const handleSubscribe = (plan) => {
    const planData = {
      name: plan.name,
      price: plan.price,
      perks: plan.perks.map((p) => p.text), // Only send text, no icons
    };
    navigate("/cart", { state: { subscriptionPlan: planData } });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50 py-16">
      {/* Heading Section */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Subscription & Membership Plans</h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-10">
        Get <b>free deliveries</b>, <b>special discounts</b>, and <b>VIP perks</b> on restaurant & tiffin orders!
      </p>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-8 w-full flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{plan.name}</h2>
              <p className="text-xl font-bold text-green-600 mb-6">₹{plan.price}/month</p>

              {/* Perks List */}
              <ul className="text-left space-y-3 mb-6">
                {plan.perks.map((perk, i) => (
                  <li key={i} className="text-gray-700 text-base flex items-center gap-3">
                    {perk.icon} {perk.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Button */}
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-xl text-lg font-medium transition duration-300 hover:bg-green-600 shadow-md w-full mt-auto"
              onClick={() => handleSubscribe(plan)}
            >
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
