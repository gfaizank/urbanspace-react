import React from 'react';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';

function CartPage() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Cart />
      <MobileNavbar />
    </div>
  );
}

export default CartPage;
