import React from 'react';
import Typed from 'react-typed';

const Hero = () => {

    // const strings = ['BTB', 'BTC', 'SASS'];
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          Appliance Repair, Sales and Services
        </p>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>
        Doorstep Service and Repair
        </h1>
        
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <Typed
          className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Save more with coupons & Get up to 60% off on all our services !</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Our Services</button>
      </div>
    </div>
  );
};

export default Hero;