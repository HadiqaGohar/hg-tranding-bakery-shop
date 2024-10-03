'use client';

import Link from 'next/link';
import ProdHead from '../components/ProdHead';

// Dummy product data
const products = [

//   more.........
{
    id: '9',
    name: 'Vanilla cupcake',
    price: 25,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_10_20c9505d-1902-42e9-b22d-ae601b62bba2_340x455.jpg?v=1581490603',
  },
  {
    id: '10',
    name: 'Chocolate Birthday Cake',
    price: 25,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_9_eaac76a5-66fb-4f95-b3a3-2360888e2a46_340x455.jpg?v=1581490713',
  },
  {
    id: '11',
    name: 'Flourless Orange Cake',
    price: 25,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_12_abaa216f-15cd-420e-b27c-21a6ad64fefa_340x455.jpg?v=1581490538',
  },
  {
    id: '12',
    name: 'Chocolate Mud Cupcakes',
    price: 25,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_5_f097c5c8-c458-4baa-992a-7c41c7939c67_340x455.jpg?v=1581490506',
  },
  {
    id: '13',
    name: 'Lemon Youghurt Cake with Syrup',
    price: 25,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_3_2c5c6df1-abe6-4c25-91fb-eb4b9e9acfa2_340x455.jpg?v=1581490437',
  },
  {
    id: '14',
    name: 'Carrot and Walnut Cake',
    price: 25,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_8_c1f4cc71-88ec-4b62-bf35-14ddf318bc05_340x455.jpg?v=1581490399',
  },
  {
    id: '15',
    name: 'Classic No-Back Vanilla Cheese',
    price: 25,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_18_6407b125-ba2d-4b0c-8548-e938415a792e_340x455.jpg?v=1581494406',
  },
  {
    id: '16',
    name: 'Chocolate Coconut Cake',
    price: 25,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_4_92f1509a-2466-40b6-84ac-35e0d5e10845_340x455.jpg?v=1581490329',
  },
  
];

export default function OfferList() {
  return (
    <div className="container mx-auto px-4 mt-8">
     
   
      


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10" >
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-center">{product.name}</h2>
            <p className="text-xl font-semibold mb-4 text-center text-red-400 ">${product.price}.00</p>
            {/* Using the corrected Link here */}
            <Link href={`/products/${product.id}`}>
              <span className="text-red-400 hover:underline font-extrabold ">View Details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
