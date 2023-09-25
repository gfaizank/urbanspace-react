import React from 'react';
import aboutImage from '../assets/about.jpeg';

const About = () => {
  return (
    <section className="bg-[#1e2a38] text-white py-16"> {/* Increased py-10 to py-16 for more height */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4"> {/* Added -mx-4 for better spacing */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:order-2"> {/* Added px-4 for padding */}
            <img src={aboutImage} alt="About Us" className="w-full" /> {/* Removed unnecessary classes */}
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 p-4 md:order-1"> {/* Added p-4 for padding */}
            <h2 className="text-4xl font-bold mb-6">About Us</h2> {/* Increased mb-4 to mb-6 for more spacing */}
            <h5 className="text-3xl mb-4 p-2">Appliances Repair, Service and <span className="text-[#00df9a]">Sales</span></h5>
            <p className="mb-4 p-2">At Urban Space, we believe in transforming living spaces into extraordinary havens that reflect modern lifestyles. Situated in the heart of Kharghar, Navi Mumbai, we are dedicated to providing top-notch home appliance repair services to enhance your everyday convenience.</p>
            <p className="mb-4 p-2">With a passion for delivering excellence, our skilled technicians bring years of expertise to the table. From refrigerators and washing machines to air conditioners and more, we specialize in reviving the essential appliances that keep your life running smoothly.</p>
            <div className="data">
              <a className="hire text-[#00df9a] hover:text-[#00c088] text-lg" href="/contact">
                <button className="bg-[#00df9a] hover:bg-[#00c088] text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring focus:ring-[#00df9a] focus:border-[#00df9a]">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
