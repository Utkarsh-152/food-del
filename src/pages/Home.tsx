import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import CategoryFilter from '../components/CategoryFilter';
import RestaurantGrid from '../components/RestaurantGrid';
import { restaurants } from '../data/restaurants';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesCategory = selectedCategory === 'all' || restaurant.category === selectedCategory;
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <HeroSection />
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <RestaurantGrid restaurants={filteredRestaurants} />
    </>
  );
};

export default Home;