import React from 'react';
import Analytics from '../components/Analytics';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
        </div>
    );
}

export default Home;
