import React from 'react';
import { FaPercent } from 'react-icons/fa';

function Cart() {
  // Sample data for cart items (you can replace this with your data)
  const cartItems = [
    { id: 1, name: 'Product 1', price: 20.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 15.49, quantity: 1 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4 text-gray-400">Summary</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-2">
          <div className="flex items-center">
            <span className="text-lg">{item.name}</span>
            <span className="ml-4 text-gray-600">Price: ₹{item.price.toFixed(2)}</span>
          </div>
          <div className="flex items-center">
            <button className="bg-red-500 text-white px-2 py-1 rounded-md mr-2">Remove</button>
            {/* <span className="text-lg text-white">{item.quantity}</span>
            <button className="bg-green-500 text-white px-2 py-1 rounded-md ml-2">Add</button> */}
          </div>
        </div>
      ))}
      <h2 className="text-xl mt-4 text-gray-300">Preferences</h2> {/* Added subheading */}
      <div className="flex items-center mt-2">
        <input type="checkbox" className="mr-2" />
        <p className='text-white  p-2 text-sm '>Avoid calling before reaching the location.</p>
      </div>

      <h2 className="text-xl mt-4 text-gray-300">Apply Coupons</h2> {/* Added Apply Coupons subheading */}
      <div className="flex items-center bg-gray-300 p-2 rounded-lg overflow-hidden mt-2">
        <FaPercent size={15} className="mr-2 " /> {/* Added the FaPercent icon */}
        <p className="text-sm p-2">Discounts and Offers</p> {/* Text for Apply Coupons */}
      </div>

      <h2 className="text-xl mt-4 text-gray-300">Payment Summary</h2>
      <div className="bg-gray-300 p-4 rounded-lg mt-2">
        <div className="flex justify-between">
          <span>Item Total</span>
          <span>₹36.47</span> {/* Replace with your actual item total */}
        </div>
        <div className="flex justify-between mt-2">
          <span><u>Taxes and Fee</u></span>
          <span>₹4.35</span> {/* Replace with your actual taxes and fee */}
        </div>
        <div className="flex justify-between mt-2">
          <span className='font-bold'>Total</span>
          <span className='font-bold'>₹40.82</span> {/* Replace with your actual total */}
        </div>
      </div>

      <div className="h-20" /> {/* Adjust the height as needed */}
    </div>
  );
}

export default Cart;
