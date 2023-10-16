import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import MobileNavbar from '../components/MobileNavbar';

const ServicePage = () => {
    return (
        <div>
            <Navbar />
            <Services />
            <Footer />
            <MobileNavbar />
        </div>
    );
}

export default ServicePage;
