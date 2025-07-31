import React from 'react';
import { Clock, MapPin, Star, Package, Truck, CheckCircle } from 'lucide-react';

interface Order {
  id: string;
  restaurantName: string;
  restaurantImage: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'preparing' | 'on-the-way' | 'delivered';
  orderDate: string;
  deliveryTime: string;
  rating?: number;
}

const mockOrders: Order[] = [
  {
    id: '1',
    restaurantName: 'Mario\'s Pizza Palace',
    restaurantImage: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    items: [
      { name: 'Margherita Pizza', quantity: 1, price: 14.99 },
      { name: 'Pepperoni Pizza', quantity: 1, price: 16.99 }
    ],
    total: 34.97,
    status: 'delivered',
    orderDate: '2024-01-15',
    deliveryTime: '25 min',
    rating: 5
  },
  {
    id: '2',
    restaurantName: 'Tokyo Sushi Bar',
    restaurantImage: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    items: [
      { name: 'Salmon Roll', quantity: 2, price: 18.99 },
      { name: 'Dragon Roll', quantity: 1, price: 22.99 }
    ],
    total: 63.96,
    status: 'on-the-way',
    orderDate: '2024-01-16',
    deliveryTime: '35 min'
  },
  {
    id: '3',
    restaurantName: 'Burger Street',
    restaurantImage: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    items: [
      { name: 'Classic Cheeseburger', quantity: 2, price: 12.99 },
      { name: 'BBQ Bacon Burger', quantity: 1, price: 15.99 }
    ],
    total: 44.96,
    status: 'preparing',
    orderDate: '2024-01-16',
    deliveryTime: '20 min'
  }
];

const OrderHistory: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'preparing':
        return <Package className="h-5 w-5 text-orange-600" />;
      case 'on-the-way':
        return <Truck className="h-5 w-5 text-blue-600" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'preparing':
        return 'text-orange-600 bg-orange-100';
      case 'on-the-way':
        return 'text-blue-600 bg-blue-100';
      case 'delivered':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const formatStatus = (status: string) => {
    switch (status) {
      case 'preparing':
        return 'Preparing';
      case 'on-the-way':
        return 'On the way';
      case 'delivered':
        return 'Delivered';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Order History</h1>
          <p className="text-gray-600 mt-2">Track your past and current orders</p>
        </div>

        <div className="space-y-6">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={order.restaurantImage}
                      alt={order.restaurantName}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{order.restaurantName}</h3>
                      <p className="text-gray-600">Order #{order.id}</p>
                      <p className="text-sm text-gray-500">{order.orderDate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-2">{formatStatus(order.status)}</span>
                    </div>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{order.deliveryTime}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="space-y-2 mb-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.name}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-bold text-gray-900">
                        Total: ${order.total.toFixed(2)}
                      </span>
                      {order.rating && (
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="text-sm text-gray-600">{order.rating}/5</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      {order.status === 'delivered' && !order.rating && (
                        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                          Rate Order
                        </button>
                      )}
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
                        Reorder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;