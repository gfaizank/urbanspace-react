import Profile from "../components/Profile";
import React from 'react';
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";

function ProfilePage() {
    return (
      <div className="container mx-auto">
        <Navbar />
        <Profile />
        <MobileNavbar />
      </div>
    );
  }
  
  export default ProfilePage;