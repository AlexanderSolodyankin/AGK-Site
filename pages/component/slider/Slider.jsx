import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from './Slider.module.scss'

import "swiper/css";
  import "swiper/css/pagination";


import { Mousewheel, Pagination } from "swiper";

import Slide1 from "./slides/slide1/Slide1";

const Slider = ({posts}) => {
  return(
    <Swiper
    direction={"vertical"}
    slidesPerView={1}
    spaceBetween={30}
    mousewheel={true}
    pagination={{
      clickable: true
    }}
    modules={[Mousewheel, Pagination]}
    class="mySwiper"
    className={Styles.Slider}
  >
      <SwiperSlide><Slide1/></SwiperSlide>
      <SwiperSlide>slider 2 <Slide1/> </SwiperSlide>
      <SwiperSlide>slider 3 <Slide1/> </SwiperSlide>
    </Swiper>
  );
};

export default Slider;