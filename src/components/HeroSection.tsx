import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Delicious Food
            <span className="block text-yellow-300">Delivered Fast</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Order from your favorite restaurants and get fresh, hot meals delivered to your doorstep in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;