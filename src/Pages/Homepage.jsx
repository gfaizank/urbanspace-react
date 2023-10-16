import React from 'react';
import Analytics from '../components/Analytics';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import MobileNavbar from '../components/MobileNavbar';
const Home = () => {
    return (
        <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
      <MobileNavbar />
        </div>
    );
}

export default Home;
