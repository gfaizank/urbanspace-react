import React, { useState, useEffect } from 'react';

const InfiniteImageMarquee = ({ images, speed = 50 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let currentPosition = 0;

    const marqueeContainer = document.querySelector('.image-marquee-container');
    marqueeContainer.style.animation = `marquee ${speed / 1000}s linear infinite`;

    const animateMarquee = () => {
      if (currentPosition === -images.length) {
        currentPosition = 0;
      }
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      currentPosition--;
      animationFrameId = requestAnimationFrame(animateMarquee);
    };

    animateMarquee();

    return () => {
      cancelAnimationFrame(animationFrameId);
      marqueeContainer.style.animation = 'none';
    };
  }, [images, speed]);

  return (
    <div className="image-marquee-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`marquee-image ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default InfiniteImageMarquee;
