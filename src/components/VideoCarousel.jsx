import React from 'react';
import Video1 from '../assets/video1.mp4'
import Video2 from '../assets/video2.mp4'
import Video3 from '../assets/video3.mp4'

const VideoCarousel = () => {
    return (

    <div className="flex flex-col bg-white m-auto p-auto">
      <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        Offers
      </h1>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
        <div className="inline-block px-3">
  <div className="w-64 h-35 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <video
      width="100%"
      height="200%"
      controls
      style={{ objectFit: 'cover' }}
    >
      <source src={Video1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

          <div className="inline-block px-3">
            <div className="w-64 h-35 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <video
      width="100%"
      height="200%"
      controls
      style={{ objectFit: 'cover' }}
    >
      <source src={Video2} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-35 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <video
      width="100%"
      height="200%"
      controls
      style={{ objectFit: 'cover' }}
    >
      <source src={Video3} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
            </div>
          </div>
          {/* <div className="inline-block px-3">
            <div className="w-64 h-35 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-35 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div> */}
          {/* <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};


export default VideoCarousel;
