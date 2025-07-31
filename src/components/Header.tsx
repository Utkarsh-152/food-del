import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, MapPin, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { items } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleAuthClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-orange-600">
                FoodExpress
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </Link>
            {user && (
              <Link to="/orders" className="text-gray-700 hover:text-orange-600 transition-colors">
                Orders
              </Link>
            )}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
              <MapPin className="h-5 w-5 mr-1" />
              <span className="hidden sm:block text-sm">Deliver to</span>
            </div>
            
            <button
              onClick={handleAuthClick}
              className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
            >
              <User className="h-5 w-5 mr-1" />
              <span className="hidden sm:block text-sm">
                {user ? user.name.split(' ')[0] : 'Account'}
              </span>
            </button>

            {user && (
              <button
                onClick={logout}
                className="hidden sm:block text-gray-700 hover:text-orange-600 transition-colors text-sm"
              >
                Logout
              </button>
            )}

            <button
              onClick={onCartClick}
              className="relative flex items-center text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;