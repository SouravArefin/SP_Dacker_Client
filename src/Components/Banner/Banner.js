import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


//banner
import banner1 from '../../b-1.jpg'
import banner2 from '../../b-2.jpg'
import './Banner.module.css'


const Banner = () => {
  return (
      <>
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
          delay: 2500,
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
          <img className='w-full'src={banner2} alt="" />
      </SwiperSlide>
          <SwiperSlide>
          <img src={banner1} alt="" />
      </SwiperSlide>
  </Swiper>
</>
    );
};

export default Banner;
