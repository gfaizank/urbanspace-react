import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/US_logo.png';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <div className="inline-block p-2 bg-white rounded-lg">
        <img src={logo} alt="Your Logo" className="w-13 h-8" />
      </div>
      

      <ul className='hidden md:flex'>
        <Link to="/" className='p-4'>Home</Link>
        <Link to="/login" className='p-4'>Login</Link>
        <Link to="/services" className='p-4'>Services</Link>
        <Link to="/about" className='p-4'>About</Link>
        <Link to="/contact" className='p-4'>Contact</Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#111827] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
  {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Urban Space</h1> */}
  <div className="inline-block p-2 m-4 bg-white rounded-lg">
        <img src={logo} alt="Your Logo" className="w-13 h-8" />
      </div>
  <li className='p-4 border-b border-gray-600'>
  <Link to="/">
      Home
    </Link>
  </li>
  <li className='p-4 border-b border-gray-600'>
    <Link to="/login">
      Login
    </Link>
  </li>
  <li className='p-4 border-b border-gray-600'>
    <Link to="/services">
      Services
    </Link></li>
  <li className='p-4 border-b border-gray-600'>
    <Link to="/about">
      About
    </Link>
  </li>
  <li className='p-4'>
    <Link to="/contact">
      Contact
    </Link>
  </li>
</ul>

      
    </div>
  );
};

export default Navbar;


{/* <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Urban Space</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <Link to="/login"className='p-4 border-b border-gray-600'>Login</Link>
          <li className='p-4 border-b border-gray-600'>Services</li>
          <Link to="/about" className='p-4 border-b border-gray-600'>About</Link>
          <Link to="/contact" className='p-4'>Contact</Link>
      </ul> */}