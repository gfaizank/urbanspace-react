import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaCopyright
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>UrbanSpace</h1>
        <p className='py-4'>At Urban Space, we believe in transforming living spaces into extraordinary havens that reflect modern lifestyles. Situated in the heart of Kharghar, Navi Mumbai, we are dedicated to providing top-notch home appliance repair services to enhance your everyday convenience.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium mb-2 text-gray-400'>Company</h6>
        <ul>
            <li className='py-1 text-sm'>About us</li>
            <li className='py-1 text-sm'>Our Services</li>
            <li className='py-1 text-sm'>Terms & Conditions</li>
            <li className='py-1 text-sm'>Privacy Policy</li>
            <li className='py-1 text-sm'>Anti-Discrimination Policy</li>
            <li className='py-1 text-sm'>Contact us</li>
        </ul>
    </div>

    

    
    {/* <div>
        <h6 className='font-medium text-gray-400'>My Account</h6>
        <ul>
            <li className='py-2 text-sm'>Login</li>
            <li className='py-2 text-sm'>View Cart</li>
            <li className='py-2 text-sm'>My wishlist</li>
            <li className='py-2 text-sm'>Track request</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Brands we deal in</h6>
        <ul>
            <li className='py-2 text-sm'>Samsung</li>
            <li className='py-2 text-sm'>L.G.</li>
            <li className='py-2 text-sm'>Haier</li>
            <li className='py-2 text-sm'>Whirlpool</li>
            <li className='py-2 text-sm'>Kent</li>
            <li className='py-2 text-sm'>See more..</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms & Conditions</li>
        </ul>
  </div> */}
      </div> 
      <div className="text-left text-sm mt-4">
    <p>&copy; {new Date().getFullYear()} Urban Space. All Rights Reserved.</p>
  </div>

      <div className="h-10" /> {/* Adjust the height as needed */}
    </div>
  );
};

export default Footer;