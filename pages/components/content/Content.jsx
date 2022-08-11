import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from './Content.module.scss';

import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

import Title from './components_slides/title/Title';

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
          <Title  content="ЛЕНДИНГ"/>
        </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Content