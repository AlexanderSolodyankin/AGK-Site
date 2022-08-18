
import Image from 'next/image';
import styles from '../styles/Home.module.css'

import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Content/>
      <Footer/>

    </div>
  )
}
