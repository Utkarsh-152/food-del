import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, MapPin, Plus, Minus } from 'lucide-react';
import { restaurants } from '../data/restaurants';
import { useCart } from '../context/CartContext';

const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { items, addItem, removeItem } = useCart();

  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Restaurant not found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const getItemQuantity = (itemId: string) => {
    const item = items.find(i => i.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <button
          onClick={() => navigate('/')}
          className="absolute top-6 left-6 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-xl mb-4">{restaurant.cuisine}</p>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
              <span>{restaurant.rating}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-1" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{restaurant.distance}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Menu</h2>
        <div className="grid gap-6">
          {restaurant.menuItems.map((item) => {
            const quantity = getItemQuantity(item.id);
            return (
              <div key={item.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg mr-6"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <p className="text-2xl font-bold text-orange-600">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    {quantity > 0 ? (
                      <>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors"
                        >
                          <Minus className="h-5 w-5" />
                        </button>
                        <span className="text-xl font-bold">{quantity}</span>
                      </>
                    ) : null}
                    <button
                      onClick={() => addItem({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        restaurantName: restaurant.name,
                        quantity: 1
                      })}
                      className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;