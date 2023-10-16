import React, { useState, useEffect } from 'react';
import '../styles/Reviews.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Reviews = ({  users, interval = 3000}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
    }, interval);

    return () => clearInterval(timer);
  }, [users, interval]);

  let imageUrl = users[currentIndex]?.image;

  return (
    <div className="enhanced-multi-text-carousel">
      <div className="carousel-container">
     
      <IconButton  className="carousel-arrow left"
      style={{
        background:'#fff'
      }}
          onClick={() => {
            setCurrentIndex((prevIndex) =>
              (prevIndex - 1 + users.length) % users.length
            );
          }}>
      <ChevronLeftIcon style={{
        color:'#000'
      }} fontSize='large'></ChevronLeftIcon>
      </IconButton>
      <div style={{
        width:'50%',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
      }}>

        <div>
        <img 
        src={imageUrl}
         style={{
          height:'100px',
        }}></img>
        </div>

        <div style={{
          display:'flex',
          flexDirection:'row',
          paddingTop:30
        }}>
          <StarIcon fontSize='medium' color="success" style={{
            color:'#FF9529'
          }}></StarIcon>
          <StarIcon fontSize='medium' color="success" style={{
            color:'#FF9529'
          }}></StarIcon>
          <StarIcon fontSize='medium' color="success" style={{
            color:'#FF9529'
          }}></StarIcon>
          <StarIcon fontSize='medium' color="success" style={{
            color:'#FF9529'
          }}></StarIcon>
          <StarIcon fontSize='medium' color="success" style={{
            color:'#FF9529'
          }}></StarIcon>
        </div>
        <div style={{
          height:'100px',
          // background:'red',
          marginTop:"10px"
        }}>
         
        <h1 style={{
          color:'white',
          fontSize:25,
          fontWeight:600
        }}>{users[currentIndex]?.name}</h1>
         <p style={{
        color:'#fff'
       }}>
       {users[currentIndex]?.rating_txt}
        </p>
       <div>
       </div>
        </div>
      </div>
       
       <IconButton onClick={()=>{
        setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % users.length
        );
       }} 
       
       style={{
        background:'#fff'
      }}
      
      className="carousel-arrow right">
       <ChevronRightIcon  style={{
        color:'#000'
      }} fontSize="large"></ChevronRightIcon>
       </IconButton>
      </div>
    </div>
  );
};

export default Reviews;
