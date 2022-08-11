import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from './Content.module.scss';

import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

function Content() {
  return (
    <div className={Styles.Content}>
        <Swiper
         direction={"vertical"}
         slidesPerView={1}
         spaceBetween={300}
         mousewheel={true}
         pagination={{
           clickable: true
         }}
         modules={[Mousewheel, Pagination]}
         class="mySwiper"
         className={Styles.Sliders}
       >

        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide2</SwiperSlide>
        <SwiperSlide>Slide3</SwiperSlide>
        <SwiperSlide>Slide4</SwiperSlide>
        <SwiperSlide>Slide5</SwiperSlide>
        <SwiperSlide>Slide6</SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Content