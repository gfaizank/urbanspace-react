import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { FaShoppingBasket } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

function MobileNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-700 p-4 text-white block md:hidden">
      <div className="flex flex-row justify-between items-center">
        <a href="/cartPage" className="flex flex-col items-center">
          <FiShoppingCart size={20} /> {/* Decreased icon size */}
          <span className="text-xs px-2 py-1">Cart</span> {/* Decreased text size */}
        </a>
        <a href="/bookingsPage" className="flex flex-col items-center">
          <FaShoppingBasket size={20} /> {/* Decreased icon size */}
          <span className="text-xs px-2 py-1">Bookings</span> {/* Decreased text size */}
        </a>
        <a href="/profilePage" className="flex flex-col items-center">
          <FaUser size={20} /> {/* Decreased icon size */}
          <span className="text-xs px-2 py-1">Profile</span> {/* Decreased text size */}
        </a>
      </div>
    </nav>
  );
}

export default MobileNavbar;
