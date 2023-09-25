import React from 'react';
import Navbar from '../components/Navbar';
import Login from './login';
import Footer from '../components/Footer';

const LoginPage = () => {
    return (
        <div>
            <Navbar />
            <Login/>
            <Footer />
        </div>
    );
}

export default LoginPage;
