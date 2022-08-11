
import Image from 'next/image';
import styles from '../styles/Home.module.css'

import Header from './components/header/Header';
import Content from './components/content/Content'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Content/>

    </div>
  )
}
