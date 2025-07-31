import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Mario\'s Pizza Palace',
    cuisine: 'Italian Pizza',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    distance: '1.2 km',
    image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pizza',
    menuItems: [
      {
        id: '1-1',
        name: 'Margherita Pizza',
        description: 'Fresh tomatoes, mozzarella, basil, and olive oil',
        price: 14.99,
        image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '1-2',
        name: 'Pepperoni Pizza',
        description: 'Classic pepperoni with mozzarella cheese',
        price: 16.99,
        image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '1-3',
        name: 'Supreme Pizza',
        description: 'Pepperoni, sausage, bell peppers, onions, mushrooms',
        price: 19.99,
        image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      }
    ]
  },
  {
    id: '2',
    name: 'Burger Street',
    cuisine: 'American Burgers',
    rating: 4.6,
    deliveryTime: '20-30 min',
    deliveryFee: 1.99,
    distance: '0.8 km',
    image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'burger',
    menuItems: [
      {
        id: '2-1',
        name: 'Classic Cheeseburger',
        description: 'Beef patty, cheese, lettuce, tomato, onion, pickles',
        price: 12.99,
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '2-2',
        name: 'BBQ Bacon Burger',
        description: 'Beef patty, bacon, BBQ sauce, cheddar cheese, onion rings',
        price: 15.99,
        image: 'https://images.pexels.com/photos/1841108/pexels-photo-1841108.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '2-3',
        name: 'Veggie Burger',
        description: 'Plant-based patty, avocado, sprouts, tomato, vegan mayo',
        price: 13.99,
        image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      }
    ]
  },
  {
    id: '3',
    name: 'Tokyo Sushi Bar',
    cuisine: 'Japanese Sushi',
    rating: 4.9,
    deliveryTime: '30-40 min',
    deliveryFee: 3.99,
    distance: '2.1 km',
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sushi',
    menuItems: [
      {
        id: '3-1',
        name: 'Salmon Roll',
        description: 'Fresh salmon, avocado, cucumber, sesame seeds',
        price: 18.99,
        image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '3-2',
        name: 'Dragon Roll',
        description: 'Eel, cucumber, topped with avocado and eel sauce',
        price: 22.99,
        image: 'https://images.pexels.com/photos/4056531/pexels-photo-4056531.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '3-3',
        name: 'Sashimi Platter',
        description: 'Assorted fresh fish, 12 pieces',
        price: 28.99,
        image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      }
    ]
  },
  {
    id: '4',
    name: 'Spice Garden',
    cuisine: 'Indian Curry',
    rating: 4.7,
    deliveryTime: '35-45 min',
    deliveryFee: 2.49,
    distance: '1.8 km',
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'indian',
    menuItems: [
      {
        id: '4-1',
        name: 'Butter Chicken',
        description: 'Tender chicken in creamy tomato curry sauce',
        price: 16.99,
        image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '4-2',
        name: 'Lamb Biryani',
        description: 'Fragrant basmati rice with spiced lamb',
        price: 19.99,
        image: 'https://images.pexels.com/photos/13689019/pexels-photo-13689019.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '4-3',
        name: 'Palak Paneer',
        description: 'Cottage cheese in spiced spinach curry',
        price: 14.99,
        image: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      }
    ]
  },
  {
    id: '5',
    name: 'Golden Wok',
    cuisine: 'Chinese Stir-fry',
    rating: 4.5,
    deliveryTime: '25-35 min',
    deliveryFee: 1.99,
    distance: '1.5 km',
    image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'chinese',
    menuItems: [
      {
        id: '5-1',
        name: 'Kung Pao Chicken',
        description: 'Spicy chicken with peanuts and vegetables',
        price: 15.99,
        image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '5-2',
        name: 'Sweet & Sour Pork',
        description: 'Crispy pork with bell peppers in tangy sauce',
        price: 16.99,
        image: 'https://images.pexels.com/photos/12737654/pexels-photo-12737654.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '5-3',
        name: 'Beef Lo Mein',
        description: 'Stir-fried noodles with beef and vegetables',
        price: 14.99,
        image: 'https://images.pexels.com/photos/6210792/pexels-photo-6210792.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      }
    ]
  },
  {
    id: '6',
    name: 'Taco Fiesta',
    cuisine: 'Mexican Street Food',
    rating: 4.4,
    deliveryTime: '20-30 min',
    deliveryFee: 0,
    distance: '0.9 km',
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'mexican',
    menuItems: [
      {
        id: '6-1',
        name: 'Carne Asada Tacos',
        description: 'Grilled steak with onions, cilantro, lime (3 tacos)',
        price: 12.99,
        image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '6-2',
        name: 'Chicken Burrito Bowl',
        description: 'Rice, beans, chicken, salsa, guacamole, cheese',
        price: 13.99,
        image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '6-3',
        name: 'Loaded Nachos',
        description: 'Tortilla chips with cheese, jalapeños, sour cream',
        price: 11.99,
        image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      }
    ]
  },
  {
    id: '7',
    name: 'Sweet Dreams Bakery',
    cuisine: 'Desserts & Pastries',
    rating: 4.8,
    deliveryTime: '15-25 min',
    deliveryFee: 1.49,
    distance: '0.6 km',
    image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'dessert',
    menuItems: [
      {
        id: '7-1',
        name: 'Chocolate Cake Slice',
        description: 'Rich chocolate cake with cream frosting',
        price: 6.99,
        image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '7-2',
        name: 'Cheesecake',
        description: 'New York style cheesecake with berry compote',
        price: 7.99,
        image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '7-3',
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee and mascarpone',
        price: 8.99,
        image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      }
    ]
  },
  {
    id: '8',
    name: 'Fresh & Fast',
    cuisine: 'Healthy Bowls',
    rating: 4.6,
    deliveryTime: '20-30 min',
    deliveryFee: 2.99,
    distance: '1.3 km',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'healthy',
    menuItems: [
      {
        id: '8-1',
        name: 'Mediterranean Bowl',
        description: 'Quinoa, grilled chicken, olives, feta, cucumber',
        price: 14.99,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '8-2',
        name: 'Acai Bowl',
        description: 'Acai base with granola, berries, coconut flakes',
        price: 12.99,
        image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      },
      {
        id: '8-3',
        name: 'Protein Power Bowl',
        description: 'Grilled salmon, brown rice, avocado, edamame',
        price: 17.99,
        image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'
      }
    ]
  }
];