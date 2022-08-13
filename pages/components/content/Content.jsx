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
          <h1 className={Styles.test}>Главный слайдер с логотипом</h1>
        </SwiperSlide >
        <SwiperSlide>
          <h1 className={Styles.test}>Сюда нужно вставить автоматический слайдер с анимацией и кнопкой</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className={Styles.test}> Слайд с новой строкой</h1>
          <Slider3 slide3/>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className={Styles.test}>Обычный слайд</h1>
          <Slider logoVisible />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className={Styles.test}>Обычный слайд</h1>
          <Slider logoVisible />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className={Styles.test}>Обычный слайд</h1>
          <Slider logoVisible />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className={Styles.test}>Слайд с кнопкой</h1>
          <Slider logoVisible />
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Content