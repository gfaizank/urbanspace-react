import React, { useState, useEffect } from 'react';

const MostBooked = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://wm-backend--connecturbanspa.repl.co/api/services')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setServices(data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className="flex flex-col bg-white m-auto p-auto">
        <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-2xl text-gray-800">
          Most booked services
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            {services.map((service, index) => (
              <div className="inline-block px-3" key={index}>
                <div className="w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img src={service.img} alt={service.title} />
                  <p>{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostBooked;



// import React from 'react';

// const MostBooked = () => {
//     return (
//         <div>
//             <div className="flex flex-col bg-white m-auto p-auto">
//       <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-2xl text-gray-800">
//         Most booked services
//       </h1>
//       <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
//         <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
//           <div className="inline-block px-3">
//             <div className="w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
//           </div>
//           <div className="inline-block px-3">
//             <div className="w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
//           </div>
//           <div className="inline-block px-3">
//             <div className="w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
//           </div>
//           <div className="inline-block px-3">
//             <div className="w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//         </div>
//     );
// }

// export default MostBooked;




{/* <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div> */}