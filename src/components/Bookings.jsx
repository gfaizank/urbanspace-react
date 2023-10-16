import React from 'react';

function Bookings() {
  return (
    <div>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full border border-gray-100 bg-gray-700 shadow-md p-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-300">My Bookings</h1>
        <button className="border border-gray-400 rounded-full py-2 px-4 text-violet-400 hover:bg-gray-100 transition duration-300">
          Help
        </button>
      </nav>

      {/* Page Content */}
      <div className="p-4">
        {/* Your content goes here */}
      </div>
    </div>
  );
}

export default Bookings;
