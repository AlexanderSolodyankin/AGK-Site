import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from './Content.module.scss';

import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

import Slider from './slider/Slider';
import Slider3 from './slider/Slider3';

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
        <SwiperSlide>
          <Slider3 slide3/>
        </SwiperSlide>
        <SwiperSlide>
          <Slider3 />
        </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Content