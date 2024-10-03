'use client';

import Link from 'next/link';
import ProdHead from '../components/ProdHead';

// Dummy product data
const sales = [
  {
    id: '1',
    name: 'Baked Lemon Cheesecake',
    price: 30,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_21_56c33d16-d5bf-426c-8bca-56cfaa538516_340x455.jpg?v=1581494229',
  },
  {
    id: '2',
    name: 'Marble Cake',
    price: 35,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_13_b965e789-1811-45eb-8f4c-e41aad3251e9_340x455.jpg?v=1581495082',
  },
  // Add more products as needed...
  {
    id: '3',
    name: 'Lemon Coconut Cake',
    price: 20,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_19_3152852d-d69d-4436-b1e0-51e4fba4e61d_340x455.jpg?v=1581495149',
  },
  {
    id: '4',
    name: 'Traditional Fruit Cake',
    price: 25,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_1_340x455.jpg?v=1581494805',
  },
  {
    id: '5',
    name: 'Choc-Honey Comb Cake',
    price: 30,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_7_a9dc45d1-8d64-4dfb-970c-453397c94bb7_340x455.jpg?v=1581494653',
  },
  {
    id: '6',
    name: 'Spiderweb Cheesecake',
    price: 20,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_11_50ba3c63-3a5a-4da0-a4d5-144440a7f339_340x455.jpg?v=1581494568',
  },
  {
    id: '7',
    name: 'Flourless Chocolate Cake',
    price: 15,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_24_c53e72a6-a77a-4bea-b510-244a56f6a687_340x455.jpg?v=1581494293',
  },
  {
    id: '8',
    name: 'Jenny’s Coffee Cake',
    price: 10,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_23_ab504f91-13fc-4ea3-b9ce-423cf30ad920_340x455.jpg?v=1581494179',
  },
//   more.........

];

export default function SaleList() {
  return (
    <div className="container mx-auto px-4 mt-8">
     
    
      


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mb-10" >
        {sales.map((sale) => (
          <div key={sale.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={sale.imageUrl}
              alt={sale.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-center">{sale.name}</h2>
            <p className="text-xl font-semibold mb-4 text-center text-red-400 ">${sale.price}.00</p>
            {/* Using the corrected Link here */}
            <Link href={`/products/${sale.id}`}>
              <span className="text-red-400 hover:underline font-extrabold ">View Details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
