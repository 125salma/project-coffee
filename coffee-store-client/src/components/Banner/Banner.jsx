import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Banner = () => {
    return (
  
<div  className='mt-20'>


      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
   
   
        <SwiperSlide>
        
          <div className=" img-container2 w-full" data-swiper-parallax="-100">
          <div className='grid grid-cols-2'>
          <div className=' pt-20 pl-10'>
          <h2 className="text-2xl text-center font-bold text-white mb-4">Would you like a Cup of Delicious Coffee?</h2>
            <p className='text-white'>
            <small>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</small>
            </p>
            <button className="btn btn-outline btn-warning">Learn More</button>

          </div>
            <p></p>
        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        
        <div  className=" img-container1 w-full" data-swiper-parallax="-100">
      <div className='grid grid-cols-2'>
           <p></p>
             <div className=' pt-20 pr-10'>
             <h2 className="text-2xl text-center font-bold text-white mb-4">Would you like a Cup of Delicious Coffee?</h2>
          <p className='text-white'>
          <small>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</small>
          </p>
          <button className="btn btn-outline btn-warning">Learn More</button>

             </div>
      </div>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        
          <div className=" img-container2 w-full" data-swiper-parallax="-100">
          <div className='grid grid-cols-2'>
        <div className='pt-20 pl-10'>
        <h2 className="text-2xl text-center font-bold text-white mb-4">Would you like a Cup of Delicious Coffee?</h2>
            <p className='text-white '>
              <small>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</small>
            </p>
            <button className="btn btn-outline btn-warning">Learn More</button>
        </div>
            <p></p>
        </div>
          </div>
        </SwiperSlide>
      

      </Swiper>
    </div>

    );
};

export default Banner;