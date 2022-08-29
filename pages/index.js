
import Image from 'next/image';
import styles from '../styles/Home.module.css'

import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Pagination } from "swiper";
import Slider1 from './components/content/slider/Slider1';
import Slider3 from './components/content/slider/Slider3';

export default function Home() {
  return (
    <div
      className={styles.container}
    >
      {/* <Header/> */}
      <Content/>
      {/* <Footer/> */}  

     

    </div>
  )
}
