import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Trade-in-offer</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Super value deal
On all Services</h1>
          <p>
          At Urban Space, we provide fast and reliable
repair services for a range of electronic
appliances. Our team of experts are well-
equipped to handle any issue and get your
appliance back up and running in no time.
          </p>
          <button className='bg-gray-700 text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Schedule a service</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;