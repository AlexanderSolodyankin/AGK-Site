import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from './Content.module.scss';

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Pagination } from "swiper";

import Slider1 from './slider/Slider1';

import Slider2_1 from './slider/Slider2_1';
import Slider2_2 from './slider/Slider2_2';
import Slider2_3 from './slider/Slider2_3';

import Slider3 from './slider/Slider3';
import Slider4 from './slider/Slider4';
import Slider5 from './slider/Slider5';
import Slider6 from './slider/Slider6';
import Slider7 from './slider/Slider7';



function Content() {
  return (
    <div className={Styles.Content}>
      <Swiper
        direction={"vertical"}
         spaceBetween={30}
        mousewheel={true}
        pagination={{
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
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay,]}
            class="mySwiper"
            className={Styles.Sliders}
          >
            <SwiperSlide>
              <Slider2_1 />
            </SwiperSlide>

            <SwiperSlide>
              <Slider2_2 />
            </SwiperSlide>
            
            <SwiperSlide>
              <Slider2_3 />
            </SwiperSlide>

          </Swiper>

        </SwiperSlide>

        <SwiperSlide>
          <Slider3 />
        </SwiperSlide>

        <SwiperSlide>
          <Slider4 />
        </SwiperSlide>

        <SwiperSlide>
          <Slider5 />
        </SwiperSlide>

        <SwiperSlide>
          <Slider6 />
        </SwiperSlide>

        <SwiperSlide>
          <Slider7 />
        </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default Content
