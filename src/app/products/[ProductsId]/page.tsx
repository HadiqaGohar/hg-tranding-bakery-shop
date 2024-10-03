'use client'
import { useParams } from 'next/navigation';
import { useState } from 'react';

// Assuming products data is imported or defined elsewhere
const products = [
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
  {
    id: '3',
    name: 'Lemon Coconut Cake',
    price: 35,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_19_3152852d-d69d-4436-b1e0-51e4fba4e61d_340x455.jpg?v=1581495149',
  },
  {
    id: '4',
    name: 'Traditional Fruit Cake',
    price: 35,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_1_340x455.jpg?v=1581494805',
  },
  {
    id: '5',
    name: 'Choc-Honey Comb Cake',
    price: 35,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_7_a9dc45d1-8d64-4dfb-970c-453397c94bb7_340x455.jpg?v=1581494653',
  },
  {
    id: '6',
    name: 'No-Bake Spiderweb Cheesecake',
    price: 35,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_11_50ba3c63-3a5a-4da0-a4d5-144440a7f339_340x455.jpg?v=1581494568',
  },
  {
    id: '7',
    name: 'Flourless Chocolate Cake',
    price: 35,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_24_c53e72a6-a77a-4bea-b510-244a56f6a687_340x455.jpg?v=1581494293',
  },
  {
    id: '8',
    name: 'Jenny’s Coffee Cake',
    price: 35,
    imageUrl:
      'https://ps-backey.myshopify.com/cdn/shop/products/image_23_ab504f91-13fc-4ea3-b9ce-423cf30ad920_340x455.jpg?v=1581494179',
  },
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

  // Add more products as needed...
];





export default function ProductDetail() {
  const { ProductsId } = useParams();
  const product = products.find((p) => p.id === ProductsId);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('small');

  if (!product) {
    return <p>Product not found.</p>;
  }

  // Function to handle the Buy Now button click
  const handleBuyNow = (cakeName: string) => {
    let basePrice = product.price; // Base price of the product
    let totalPrice = basePrice * quantity; // Calculate total price based on quantity

    // Add additional charges based on size
    if (size === 'medium') {
      totalPrice += 10 * quantity; // Add $10 for each medium size
    } else if (size === 'large') {
      totalPrice += 20 * quantity; // Add $20 for each large size
    }

    alert(`You bought: ${cakeName} - Quantity: ${quantity} - Size: ${size} - Total Price: $${totalPrice}`);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 mt-5 mb-16">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
          
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-red-600 italic">{product.name}</h1>
          
          <p className='font-medium mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, id. Beatae atque sequi iure quae consequuntur enim illo ipsum labore praesentium. Quasi minus at numquam ab obcaecati commodi magni ipsam.</p>
          
          
          <p className="text-xl font-semibold mb-4">Price: <span className='text-red-500'> ${product.price}</span></p>

          {/* Size Selector */}
          <div className="mb-4 text-center lg:text-left">
            <label htmlFor="size" className="block font-bold mb-2 text-xl">Select Size:</label>
            <select
              id="size"
              className="border p-2"
              value={size}
              onChange={handleSizeChange}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          {/* Quantity Input */}
          <div className="mb-4 text-center lg:text-left">
            <label htmlFor="quantity" className="block font-bold mb-2 text-xl">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="border p-2"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>

          {/* Buy Now Button */}
          <div className="mt-4 mb-8 flex flex-col items-center lg:items-start lg:flex-row lg:space-x-4">
            <button
              className="bg-red-400 text-white py-1 px-3 rounded shadow-md hover:bg-red-500 transition duration-300"
              onClick={() => handleBuyNow(product.name)} // Pass only the product name
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
