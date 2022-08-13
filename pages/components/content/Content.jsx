import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from './Content.module.scss';

import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

import Slider1 from './slider/Slider1';
import Slider3 from './slider/Slider3';
import Slider4 from './slider/Slider4';
import Slider5 from './slider/Slider5';
import Slider6 from './slider/Slider6';
import Slider7 from './slider/Slider7';

function Content() {
 return (
    <div className={Styles.Content}>
        <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         direction={"vertical"}
        //  slidesPerView={1}
         spaceBetween={30}
         mousewheel={true}pagination={{
           clickable: true           
         }}
         modules={[Mousewheel, Pagination]}
         class="mySwiper"
         
         className={Styles.Sliders}
       >
        <SwiperSlide >
          <Slider1 />
        </SwiperSlide >

        <SwiperSlide>
          <h1 className={Styles.test}>Сюда нужно вставить автоматический слайдер с анимацией и кнопкой</h1>
        </SwiperSlide>

        <SwiperSlide>
          <Slider3/>
        </SwiperSlide>

        <SwiperSlide>
          <Slider4/>
        </SwiperSlide>

        <SwiperSlide>
          <Slider5/>
        </SwiperSlide>

        <SwiperSlide>
          <Slider6/>
        </SwiperSlide>

        <SwiperSlide>
        <Slider7/>
        </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Content