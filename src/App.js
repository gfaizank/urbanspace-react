import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Homepage';
import ServicePage from './Pages/ServicePage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/contact",
    element: <ContactPage></ContactPage>,
  },
  {
    path: "/services",
    element: <ServicePage></ServicePage>,
  },
  
]);

function App() {
  return (
    <div>
      {/* <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer /> */}
      {/* //Contact us */}
    {/* <Navbar />
    <Contact />
    <Footer /> */}
    {/* about us
    <Navbar />
    <About />
    <Footer /> */}

    {/* <Navbar />
    <Signup />
    <Footer /> */}
    <RouterProvider router={router} />
    
    

      
    </div>
  );
}

export default App;