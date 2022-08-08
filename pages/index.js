import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from './component/header/Header';
import Content from './component/content/ContentSlider';
import Slider from './component/slider/Slider';

export default function Home() {
  return (
    <div className={styles.Home}>
      <Header/>
      {/* <Content/> автоматический  слайдер */}
      <Slider/>
      
    </div>
  )
}
