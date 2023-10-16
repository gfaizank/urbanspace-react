import React from 'react';
import Analytics from '../components/Analytics';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import { useState,useEffect } from 'react';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Banner from '../components/Banner';
import Banner1Img from '../assets/banner1.jpeg';
import Banner2Img from '../assets/banner2.jpeg'
import MobileNavbar from '../components/MobileNavbar';
const Home = () => {
  const [data,setData]=useState([]);
  const [searchData,setSearchData]=useState([]);
  const [searchQuery,setSearchQuery]=useState('')


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


const search=async (searchQuery)=>{
  await fetch(`https://wm-backend--connecturbanspa.repl.co/api/services?category=${searchQuery}`) // Replace with your API endpoint
.then((response) => response.json())
.then(async(responseData) => {

await setSearchData(responseData.api_data);
console.log(responseData.api_data)
})
.catch((error) => {
console.error('Error fetching data:', error);
});
}

useEffect(()=>{
 if(searchQuery.length>0){
  search(searchQuery)
 }
},[searchQuery])

    return (
        <div>
      <Navbar />
      {window.innerWidth<500?(
      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
      
      }}>
          <input placeholder='Search something...' style={{
          padding:10,
          borderWidth:1,
          borderColor:'#fff',
          width:'90%',
          // borderRadius:5,
          outline:'none',
          fontWeight:'500',
          fontSize:15
          
        }}
        onChange={(e)=>{
          setSearchQuery(e.target.value)
        }}
        value={searchQuery}
        ></input>
       {
        searchData?.length<1 && searchQuery.length>0?(
          <div style={{
            width:'90%',
            background:'white',
            marginTop:5
         }}>
           {
           <h1 style={{
                 color:'#000',
                 fontWeight:'500',
                 fontSize:15,
                 padding:10
               }}>No Result Found</h1>
             
           }
         </div>
        ):(
          <div style={{
            width:'90%',
            background:'white',
            marginTop:5
         }}>
           {
             searchData?.map((data,index)=>{
               return <h1 key={index} style={{
                 color:'#000',
                 fontWeight:'500',
                 fontSize:15,
                 padding:10
               }}>{data?.title}</h1>
             })
           }
         </div>
        )
       }
      </div>
      ):(
        <></>
      )}
      <Hero />
      {
        window.innerWidth<500?(
          <div style={{
            paddingLeft:"5%",
            paddingRight:'5%',
            justifyContent:'center',
            alignItems:'center',
            display:'flex',
            flexDirection:'column',
            // marginTop:10,
            marginBottom:20
          }}>
            <div className='flex items-center'>
            <p className=' text-customTwo p-3  '>Buy Products</p>
            <div className=' bg-customTwo h-0.5 w-40 ml-1 '></div>
        </div>
            
          <Banner img={Banner1Img}></Banner>
          </div>
        ):(
          <></>
        )
      }
      <Analytics />

      {
        window.innerWidth<500?(
          <div style={{
            paddingLeft:"5%",
            paddingRight:'5%',
            justifyContent:'center',
            alignItems:'center',
            display:'flex',
            flexDirection:'column',
            // marginTop:10,
            marginBottom:20
          }}>
              <div className='flex items-center'>
            <p className=' text-customTwo p-3  '>Buy Products</p>
            <div className=' bg-customTwo h-0.5 w-40 ml-1 '></div>
        </div>
          <Banner img={Banner2Img}></Banner>
          </div>
        ):(
          <></>
        )
      }

      <Newsletter />
      {/* <Cards /> */}
      <div style={{
        paddingTop:10,
        paddingBottom:10
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
            fontSize:40
          }}>Our Customer Reviews</h1>
        </div>
      <Reviews users={data} interval={3000} ></Reviews>
      </div>


      <div style={{
        position:"fixed",
        right:10,
        bottom:"15%",
        display:'flex',
        flexDirection:'column'
      }}>
        <div style={{
          background:'white',
          marginBottom:5
          // marginRight:5
        }}>
        <LocalPhoneIcon fontSize='large' style={{
          color:'#000'
        }}></LocalPhoneIcon>
        </div>
        <div style={{
          background:'white'
        }}>
        <WhatsAppIcon fontSize='large' style={{
           color:'#00df9a'
        }}></WhatsAppIcon>
        </div>
      </div>
      <Footer />


    
      <MobileNavbar />
    
        </div>
    );
}

export default Home;
