import React, { useEffect ,useState} from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import axios from 'axios'

import MobileNavbar from '../components/MobileNavbar';

const ServicePage = () => {
    const [data,setData]=useState([]);

    const Users = [
        {
        image:"https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name:"Jack and Jones",
        text:"At Urban Space, we believe in transforming living spaces into extraordinary havens that reflect modern lifestyles. Situated in the heart of Kharghar, Navi Mumbai, we are dedicated to providing top-notch home appliance repair services to enhance your everyday convenience"
        },
        {
            image:"https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name:"Jack",
            text:"Situated in the heart of Kharghar, Navi Mumbai, we are dedicated to providing top-notch home appliance repair services to enhance your everyday convenience"
            },
    ];
   
    // useEffect(async() => {
    //     // Make the GET request when the component mounts
    //     await axios.get('https://wm-backend--connecturbanspa.repl.co/api/review')
    //       .then(async(response) => {
    //         // Set the data in the component's state
    //         await setData(response.data.reviews);
    //         console.log(response.data.reviews)
    //       })
    //       .catch((error) => {
    //         console.error('Error:', error);
    //       });
    //   }, []);

    const fetchReviews=async ()=>{
        await fetch('https://wm-backend--connecturbanspa.repl.co/api/review') // Replace with your API endpoint
  .then((response) => response.json())
  .then(async(responseData) => {

    await setData(responseData.reviews);
    console.log(responseData.reviews)
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
    }
    useEffect(()=>{
          fetchReviews();
    },[])

    return (
        <div>
            <Navbar />
            <Services />

            <div style={{
             paddingTop:20,
            //  background:'blue',
             alignItems:'center',
             justifyContent:'center',
             flexDirection:'column',
             display:'flex'
            }}>
               <div style={{
          paddingTop:10,
          paddingBottom:20,
          alignItems:'center',
          justifyContent:'center',
          display:'flex'
        }}>
          <h1 style={{
            color:'#fff',
            fontSize:20
          }}>Our Customer Reviews</h1>
        </div>
            <Reviews users={data} interval={3000} ></Reviews>
            </div>
     
            <Footer />
            <MobileNavbar />
        </div>
    );
}

export default ServicePage;
