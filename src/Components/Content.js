import React from 'react';

export const Content = () => {
  return (
    <div className="max-w-full mx-auto">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center pl-16">
          <div className="text-left max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              Delicious food,<br />delivered to your door
            </h1>
            <p className="text-white/90 text-lg mb-6">
              Order from your favorite restaurants with just a few clicks.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
