import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Signup from './signup';

const SignupPage = () => {
    return (
        <div>
             <Navbar />
            <Signup/>
            <Footer />
            
        </div>
    );
}

export default SignupPage;
