import React from 'react';
import RestaurantCard from './RestaurantCard';
import { Restaurant } from '../types';

interface RestaurantGridProps {
  restaurants: Restaurant[];
}

const RestaurantGrid: React.FC<RestaurantGridProps> = ({ restaurants }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Restaurants</h2>
          <p className="text-gray-600">{restaurants.length} restaurants available</p>
        </div>
        
        {restaurants.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No restaurants found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RestaurantGrid;