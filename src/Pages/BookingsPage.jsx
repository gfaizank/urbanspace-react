import React from 'react';
import MobileNavbar from '../components/MobileNavbar';
import Bookings from '../components/Bookings';

function BookingsPage() {
    return (
      <div className="container mx-auto">
        <Bookings />
        <MobileNavbar />
      </div>
    );
  }
  
  export default BookingsPage;