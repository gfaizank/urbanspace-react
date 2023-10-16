import React from 'react';
import Navbar from '../components/Navbar';
import About from './About';
import Footer from '../components/Footer';
import MobileNavbar from '../components/MobileNavbar';


const AboutPage = () => {
    return (
        <div>
             <Navbar />
            <About/>
            <Footer />
            <MobileNavbar />
        </div>
    );
}

export default AboutPage;
